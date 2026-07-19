# Tracery — 문법 조합 텍스트 생성

- **한 줄**: 치환 문법(grammar)으로 템플릿을 재귀 전개해, 적은 저작으로 조합 폭발적 다양성의 문장을 만드는 라이브러리. LLM 이전 봇 생태계의 표준.
- **주체·시기**: Kate Compton (당시 UCSC), 2014~. 트위터 봇 플랫폼 Cheap Bots Done Quick의 엔진으로 수천 개 봇을 낳았다.
- **코드**: [github.com/galaxykate/tracery](https://github.com/galaxykate/tracery) (JS 원본), [aparrish/pytracery](https://github.com/aparrish/pytracery) (Python 포트), C#/Unity·JVM 등 포트 다수. 논문 ["Tracery: An Author-Focused Generative Text Tool"](https://www.researchgate.net/publication/300137911_Tracery_An_Author-Focused_Generative_Text_Tool).

## 무엇인가

문법은 그냥 JSON이다:

```json
{
  "사건": ["#주민#이 #장소#에서 #행동#"],
  "행동": ["오래된 기록을 발견했다", "낯선 발자국을 보았다"],
  "장소": ["온실 정원", "기억 도서관"]
}
```

`#사건#`을 전개하면 규칙이 재귀적으로 치환된다. 수식자(modifier)로 대문자화·복수형
같은 후처리를 붙일 수 있고, 전개 중 값을 저장해 한 문장 안의 일관성(같은 주민을 두 번
언급)도 유지한다. 문법 3단 × 각 10개 항목이면 이미 수천 가지 문장이다.

## LUNA-WORLD에 가져올 것

1. **고정 문장 풀의 해독제** — 현재 프로토타입의 최대 약점은 대화·사건 문장이 몇 개의
   `pick([...])`에서 나와 금방 반복이 느껴진다는 것. 사건 데이터(누가·어디서·무엇을·
   기분)를 슬롯으로 받는 한국어 문법을 짜면 같은 사건도 매번 다르게 서술된다.
2. **한국어 수식자** — 조사 처리(이/가, 을/를, 은/는)를 수식자로 구현하는 게 관건.
   받침 유무 판정은 유니코드 계산으로 간단하다((code-0xAC00)%28≠0).
3. **주민별 말투 문법** — 주민마다 문법 일부를 오버라이드하면(어미, 즐겨 쓰는 표현)
   페르소나가 저작 비용 거의 없이 생긴다.

## 한계·주의

- 문법은 문맥을 모른다 — 무엇을 말할지는 시뮬레이션이 정하고, Tracery는 어떻게 말할지만.
- 원본 JS는 그대로 쓸 수 있을 만큼 작다(의존성 0). 직접 이식해도 반나절 규모.
