# Ensemble / CiF / Prom Week — 규칙으로 만든 사회 물리

- **한 줄**: 수천 개의 사회 규칙이 인물들의 감정·관계·평판을 밀고 당기는 "social physics" 엔진. 브라우저 JS로 공개.
- **주체·시기**: UC Santa Cruz Expressive Intelligence Studio. CiF(Comme il Faut) 엔진 → 게임 *Prom Week*(2012, FDG 논문 "Prom Week: Social Physics as Gameplay") → 후계 엔진 **Ensemble.js**.
- **코드**: [github.com/ensemble-engine/ensemble](https://github.com/ensemble-engine/ensemble) — 독립 JS 라이브러리 + 저작 도구(데스크톱 앱). [프로젝트 페이지](https://games.soe.ucsc.edu/project/ensemble-engine).

## 무엇인가

Prom Week는 고등학교 프롬 전 일주일 동안 학생들의 사회 관계를 퍼즐처럼 조작하는 게임이다.
캐릭터가 대본을 따르는 게 아니라, "A가 창피를 당했고 B를 좋아하면 C 행동의 욕구가 오른다"
같은 **사회 규칙 수천 개**가 매 순간 모든 캐릭터의 행동 욕구(volition)를 계산한다.
Ensemble은 이 엔진을 범용화한 것으로, 게임 없이도 규칙 저작과 시뮬레이션이 가능하다.

## 핵심 메커니즘

- **사회 상태**: 캐릭터는 특성(traits), 상태(statuses), 관계(relationships, 방향성 있는
  수치)를 가진다. 세계에는 공유된 "문화적 지식"(누가 뭘 했는지의 역사)이 쌓인다.
- **규칙 → 의지(volition)**: 각 규칙은 "조건 집합 → 특정 사회적 교환(social exchange)에
  대한 가중치"다. 모든 규칙을 평가해 합산하면 "지금 이 캐릭터가 누구에게 무엇을 하고
  싶은가"의 순위표가 나온다.
- **사회적 교환**: 선택된 행동(고백, 모욕, 화해…)이 실행되면 성공/실패에 따라 사회
  상태가 바뀌고, 그 변화가 다시 규칙 평가에 들어간다 — 되먹임 고리.
- **엔진과 콘텐츠의 분리**: 엔진은 범용이고, 규칙·캐릭터·교환은 전부 데이터(JSON)다.

## LUNA-WORLD에 가져올 것

1. **규칙의 데이터화** — 현재 프로토타입은 행동 조건이 코드에 박혀 있다(`workDecision`의
   확률들). Ensemble처럼 "조건 → 행동 가중치"를 JSON으로 빼면, 코드 수정 없이 마을의
   사회 물리를 튜닝·확장할 수 있다.
2. **의지 순위표** — 매 틱 "가장 하고 싶은 것"을 계산하는 구조는 The Sims 유틸리티 AI와
   같은 계열이며, 관찰 UI에서 "이 주민이 왜 이걸 했나"를 설명 가능하게 만든다.
3. **브라우저 단독 구동 선례** — 우리 (B) 아키텍처가 이미 연구 수준에서 검증됐다는 증거.

## 한계·주의

- 규칙 저작 비용이 크다 — Prom Week는 규칙 5,000개 규모. 소규모로 시작해 점진 확장 필요.
- 공간·이동 개념이 없다(순수 사회 상태 기계). 지도는 우리가 얹어야 한다.
- 대사는 결국 템플릿이다 — Tracery와 조합하는 게 자연스럽다.
