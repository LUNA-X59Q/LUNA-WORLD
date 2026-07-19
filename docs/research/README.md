# 유사 프로젝트 조사 서고

LLM 없이 코드만으로 굴러가는 에이전트 시뮬레이션의 선행 사례를 프로젝트별로 하나씩 정리한다.
각 문서는 같은 틀을 쓴다: **무엇인가 → 핵심 메커니즘 → LUNA-WORLD에 가져올 것 → 한계·주의**.
총론과 아키텍처 결정은 [`../research-no-llm-simulation-2026-07-19.md`](../research-no-llm-simulation-2026-07-19.md) 참조.

## 목록

### 사회 시뮬레이션 (우리와 가장 가까운 갈래)

| 문서 | 한 줄 | 코드 |
|---|---|---|
| [talk-of-the-town.md](talk-of-the-town.md) | 소도시 140년: 불완전한 기억과 소문의 사회 시뮬레이션 | 공개 (MIT) |
| [ensemble-cif.md](ensemble-cif.md) | Prom Week의 "social physics" 규칙 엔진, 브라우저 JS | 공개 |
| [versu.md](versu.md) | Sims 3 AI 리드가 만든 사회적 관습 기반 드라마 엔진 | 비공개 (논문만) |
| [kismet.md](kismet.md) | 자연어풍 문법으로 쓰는 소형 사회 시뮬레이션 언어 | 논문 중심 |

### 에이전트 기반 모델링(ABM) 프레임워크와 고전

| 문서 | 한 줄 | 코드 |
|---|---|---|
| [mesa.md](mesa.md) | Python ABM 표준 프레임워크 (지금도 활발) | 공개 (Apache-2.0) |
| [netlogo.md](netlogo.md) | ABM 교육 표준 + 1,000개 이상의 공개 모델 서고 | 공개 (GPL) |
| [sugarscape.md](sugarscape.md) | 격자 자원 위에서 무역·불평등·문화가 창발 (1996) | 구현체 공개 |
| [schelling.md](schelling.md) | 관용 임계값 하나로 거주지 분리가 창발 (1971) | 구현체 공개 |
| [boids.md](boids.md) | 규칙 3개로 군집 비행 (1987) | 구현체 공개 |

### 상업 게임의 검증된 패턴 (개념 참고)

| 문서 | 한 줄 | 코드 |
|---|---|---|
| [the-sims.md](the-sims.md) | 사물이 욕구 충족을 광고하는 유틸리티 AI | 비공개 |
| [dwarf-fortress.md](dwarf-fortress.md) | 기억이 성격을 바꾸는 드워프들과 전설 모드 | 비공개 |
| [rimworld.md](rimworld.md) | 시뮬레이션 위의 "이야기 감독" 페이싱 레이어 | 비공개 |
| [veloren-rtsim.md](veloren-rtsim.md) | 수만 NPC를 실시간으로: 해상도 2층 + 틱 스로틀링 | 공개 (GPL-3.0) |

### 도구·계보

| 문서 | 한 줄 | 코드 |
|---|---|---|
| [tracery.md](tracery.md) | 문법 조합으로 텍스트 생성 — 고정 문장 풀의 해독제 | 공개 |
| [llm-lineage.md](llm-lineage.md) | Smallville·AI Town·AI Village에서 LLM 없이도 이식되는 것들 | (도서관 문서 연계) |
