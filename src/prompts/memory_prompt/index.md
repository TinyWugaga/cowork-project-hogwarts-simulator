# Memory / Save System

## 功能選單

當玩家輸入：

- /menu
- 開啟選單
- 打開魔法筆記本

顯示功能選單：

- 當前狀態 （/status）
- 角色關係 （/npcs）
- 存檔（/save）
- 讀檔（/load）

### 選單指令

#### `/status`

顯示：

- 名稱
- 學年
- 學院
- 地點
- 時間
- 學院分
- 劇情進度

---

#### `/npcs`

顯示：

- NPC 名稱
- 好感度
- 關係描述

---

#### `/save`

依照 [game_history.md ## 接收 save 指令](./game_history.md##接收-save-指令) 記錄格式輸出 JSON。

輸出：

1. JSON 存檔
2. 劇情摘要

完成後繼續未完成劇情選擇。

---

#### `/load`

依照 [game_history.md ## 接收 load 指令](./game_history.md##接收-load-指令) 記錄規範讀取 JSON。

恢復：

- 玩家資訊
- NPC 關係
- 劇情旗標
- 任務進度
- 劇情摘要

恢復後直接繼續遊戲。

# Game State Engine

## World State（世界狀態）

每次存檔都維護：

```json
{
  "date": "1991-09-01",
  "year": 1,
  "season": "autumn",
  "weekday": "Sunday",
  "location": "Hogwarts Express",
  "weather": "sunny",
  "current_arc": "First Year",
  "active_storylines": ["forbidden_forest_mystery"]
}
```

## Story Flags（劇情旗標）

不要記錄完整故事。

只記錄「已發生的重要事件」。

例如：

```json
{
  "story_flags": [
    "met_harry",
    "met_ron",
    "sorting_completed",
    "night_exploration_01",
    "found_old_map",
    "opened_hidden_corridor",
    "forbidden_forest_started"
  ]
}
```

## NPC Memory System

每個角色獨立記憶。

例如：

```json
{
  "hermione_granger": {
    "affection": 48,
    "known_events": ["library_help", "potions_teamwork"],
    "opinion": "responsible student",
    "last_interaction": "1991-10-03"
  }
}
```

### NPC 不知道的事情

非常重要。

例如：

```json
{
  "draco_malfoy": {
    "known_events": ["dueling_club"]
  }
}
```

代表：

Draco 不知道：

- 禁林事件
- 地圖事件
- 深夜探險

因此不能在對話中提及。

## Relationship Graph

不要只存好感度。

增加關係類型。

```json
{
  "harry": {
    "affection": 65,
    "relationship": "friend"
  },

  "draco": {
    "affection": 25,
    "relationship": "rival"
  },

  "hermione": {
    "affection": 52,
    "relationship": "friend"
  }
}
```

## Character Reputation

聲望系統。

```json
{
  "reputation": {
    "gryffindor": 30,
    "slytherin": -10,
    "teachers": 15,
    "students": 20
  }
}
```

影響：

- NPC 態度
- 教授評價
- 劇情機會

## Inventory

物品系統。

```json
{
  "inventory": [
    {
      "id": "wand",
      "name": "冬青木魔杖"
    },

    {
      "id": "old_map",
      "name": "神秘地圖"
    }
  ]
}
```

## Skill System

能力值。

```json
{
  "skills": {
    "charms": 12,
    "transfiguration": 8,
    "potions": 15,
    "flying": 4,
    "defense": 10
  }
}
```

等級越高：

- 成功率越高
- 解鎖特殊事件

## Trait System

人格特質。

由玩家行為累積。

```json
{
  "traits": ["curious", "brave", "reckless"]
}
```

例如：

常夜遊：

```json
"reckless"
```

常幫助同學：

```json
"kind"
```

常研究魔法：

```json
"scholarly"
```

後續 NPC 會據此改變看法。

---

## Event Scheduler

事件排程器。

```json
{
  "future_events": [
    {
      "id": "quidditch_match",
      "date": "1991-11-12"
    },

    {
      "id": "christmas_holiday",
      "date": "1991-12-25"
    }
  ]
}
```

這樣 AI 不會忘記：

- 魁地奇比賽
- 聖誕節
- 考試週
- 學院盃

## Quest System

任務獨立管理。

```json
{
  "active_quests": [
    {
      "id": "forbidden_forest",
      "title": "禁林的低語",
      "progress": 2
    }
  ]
}
```
