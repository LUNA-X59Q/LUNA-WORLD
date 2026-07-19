# LUNA-WORLD

루나의 두 번째 마을. **LLM·API 호출 0, 운영 비용 0** — 순수 규칙 코드만으로 주민들이
실시간으로 살아가는 브라우저 시뮬레이션 실험이다. 루나의 도서관 AI마을이 "말의 창발"을
관찰했다면, 여기서는 "구조의 창발"을 관찰한다.

- 형태: 단일 HTML(캔버스 지도 + 관찰 패널), 시뮬레이션 전체가 브라우저에서 구동
- 배포: Cloud Run 정적 서빙 (최소 인스턴스 **0 유지** — 운영 수칙)
- 상태: 폐기됐던 실시간 프로토타입(`index.html`)을 부활시켜 출발점으로 삼음 (2026-07-19)

## 읽는 순서

| 순서 | 문서 | 무엇 |
|---|---|---|
| 1 | [`docs/research-no-llm-simulation-2026-07-19.md`](docs/research-no-llm-simulation-2026-07-19.md) | 총론 — 실험 전제, 아키텍처 결정(브라우저형 확정), 빌릴 부품 4개 |
| 2 | [`docs/research/`](docs/research/README.md) | **조사 서고** — 유사 프로젝트 15종을 하나씩: Talk of the Town, Ensemble, Mesa, Sugarscape, The Sims, Dwarf Fortress, RimWorld, Veloren rtsim, Tracery… |
| 3 | [`index.html`](index.html) | 부활한 프로토타입 — 주민 8명, 건물 7개, GA식 기억 회상·소식 전파·기술 서랍 내장 |

## 프로토타입이 이미 갖춘 것

- Generative Agents식 기억 회상(최근성·중요도·관련성)과 성찰(기억 묶음)
- 확신도를 갖고 사람을 타고 퍼지는 소식 + 관측대 검증 (Talk of the Town 계열)
- 하루 일정 계획 + 상황 반응, 프로젝트·기술 서랍, 입력 대기열
- 시드 기반 난수(재현 가능), 0.05초 고정 스텝(결정론), localStorage 저장
- 멈춤 / 한 걸음 / 배속 관찰 컨트롤

## 다음 갈 곳 (조사에서 도출)

1. 대화·서사를 Tracery식 문법으로 (고정 문장 풀 탈출)
2. 행동 로직을 건물의 "광고"로 이사 (The Sims 패턴 — 건물 추가가 곧 행동 확장)
3. 따라잡기(catch-up): 닫혀 있던 시간을 저해상도 규칙으로 메꾸기 (Veloren rtsim 패턴)
4. 기억 영구화 시 성격 변화 (Dwarf Fortress 패턴)
5. 사건 감독 레이어 (RimWorld 패턴)
