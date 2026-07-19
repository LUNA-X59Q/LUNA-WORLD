# Mesa — Python ABM 표준 프레임워크

- **한 줄**: 에이전트 기반 모델링의 Python 표준. 격자·스케줄러·데이터 수집·브라우저 시각화가 내장된, 지금도 활발한 프레임워크.
- **주체·시기**: 오픈소스 커뮤니티(projectmesa), 2014~현재. NetLogo·Repast·MASON의 Python 대체를 표방.
- **코드**: [github.com/projectmesa/mesa](https://github.com/projectmesa/mesa) — **Apache-2.0**, 3.7k★, v3.5.1(2026-03), Mesa 4 개발 중. 예제: [projectmesa/mesa-examples](https://github.com/projectmesa/mesa-examples).

## 무엇인가

연구자가 며칠 만에 ABM을 세우고 관찰할 수 있게 하는 프레임워크. Sugarscape·Schelling·
Boids 같은 고전이 전부 공식 예제로 들어 있어, "돌아가는 교과서" 역할을 한다.

## 핵심 메커니즘 (구조 표준)

- **Model / Agent 분리**: Model이 세계(공간·시계·전역 상태)를, Agent가 개체를 담당.
  `step()` 메서드 규약으로 시간이 흐른다.
- **공간 모듈**: 격자(SingleGrid/MultiGrid), 연속 공간, 네트워크. 최근 버전은
  **PropertyLayer**로 "격자 칸 자체가 갖는 값"(설탕량, 오염도…)을 1급으로 다룬다.
- **스케줄러**: 순차·무작위·동시 활성화 등 — 활성화 순서가 결과를 바꾼다는 ABM의
  고전적 교훈이 모듈로 정리돼 있다.
- **DataCollector**: 매 스텝 모델/에이전트 지표를 수집해 시계열로 —
  "관찰"을 위한 표준 부품.
- **시각화**: Solara 기반 브라우저 대시보드(격자 뷰 + 차트 + 파라미터 슬라이더).

## LUNA-WORLD에 가져올 것

1. **구조의 표준형** — 우리는 JS로 가지만 Model/Agent/step/DataCollector 구획은 그대로
   이식할 가치가 있다. 특히 현재 프로토타입에 없는 **지표 시계열 수집**(관계 밀도,
   혼선, 소식 확산률의 시간 그래프)은 "자유 관찰"의 핵심 도구다.
2. **PropertyLayer 발상** — 격자 칸에 값이 살면(자원·소음·기억의 흔적) Sugarscape류의
   환경 창발이 열린다.
3. **파라미터 슬라이더** — 관찰 화면에서 규칙 상수를 실시간으로 만지는 UI 패턴.

## 한계·주의

- Python이므로 코드 자체를 (B) 브라우저형에 쓸 수는 없다 — 구조만 번역.
- Mesa의 시각화는 연구용 대시보드 미학 — 우리 지도의 미학은 프로토타입 쪽이 낫다.
