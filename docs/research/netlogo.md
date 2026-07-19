# NetLogo — ABM 교육 표준과 모델 서고

- **한 줄**: 30년 가까이 이어진 ABM 교육·연구 표준 환경. 진짜 가치는 1,000개 이상의 공개 모델 서고.
- **주체·시기**: Northwestern University CCL(Uri Wilensky), 1999~현재.
- **코드**: [github.com/NetLogo/NetLogo](https://github.com/NetLogo/NetLogo) — 오픈소스(GPL), Scala/Java. 웹 실행판 NetLogo Web도 있음. 모델 공유터 [Modeling Commons](http://modelingcommons.org)에 1,000개+ 모델.

## 무엇인가

"turtles, patches, and links" — 에이전트(거북), 격자 칸(패치), 연결(링크)이라는 세 개념만으로
초등학생부터 연구자까지 ABM을 만든다. 내장 모델 라이브러리에 경제·생물·물리·심리·
사회학 모델이 수백 개 들어 있고 전부 소스가 열려 있다.

## 핵심 메커니즘

- **패치도 에이전트다**: 격자 칸이 상태와 규칙을 가진다 — Mesa PropertyLayer의 원형.
- **관찰 도구 내장**: 모든 모델에 슬라이더·플롯·모니터가 붙는 문화. "모델 = 실험 기구".
- **모델 서고 문화**: Sample Models(검증됨)·Curricular Models·Code Examples로 등급화.

## LUNA-WORLD에 가져올 것

1. **아이디어 채굴장** — 마을에 넣을 창발 메커니즘이 궁금할 때(전염, 여론, 시장, 협력의
   진화…) NetLogo 모델 라이브러리에서 검증된 최소 모델을 찾아 규칙을 읽으면 된다.
   사회학 분류만 수십 개다.
2. **"모델 = 실험 기구" 태도** — 슬라이더와 플롯이 항상 붙어 있는 문화는 우리 관찰
   UI의 지향점과 같다.

## 한계·주의

- 전용 언어라 코드 이식은 안 된다 — 규칙을 읽고 JS로 다시 쓰는 용도.
- 미학이 1990년대 그대로라는 점도 반면교사(관찰 도구와 아름다움은 양립 가능해야 한다).
