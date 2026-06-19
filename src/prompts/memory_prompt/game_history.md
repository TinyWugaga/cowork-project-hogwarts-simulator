# 歷史紀錄

## 存檔格式

```json
{
  "form_id": "{start_game_timestamp}",
  "savedAt": "{game_scene_date_time}",
  "character": {
    "name": "",
    "nick": "",
    "gender": "",
    "birthday": "",
    "house": "",
    "year": 1,
    "wand": "",
    "origin": "",
    "mbti": "",
    "personality": [],
    "talents": [],
    "housePoints": 0
  },
  "worldState": {
    "date": "",
    "season": "",
    "timeOfDay": "",
    "location": "",
    "weather": "",
    "currentArc": "",
    "activeStorylines": []
  },
  "npcs": {},
  "flags": {},
  "inventory": [],
  "skills": {},
  "traits": [],
  "reputation": {},
  "futureEvents": [],
  "summary": ""
}
```

## 接收 save 指令

記錄當前遊戲資料並輸出 JSON。

### 無遊戲進度

若沒有遊戲進度，則詢問玩家是否要建立新遊戲。

## 接收 load 指令

### 讀取紀錄檔案

#### 有 form_id

如當前對話中有 form_id，則在資料夾 `src/history/` 中尋找對應的紀錄檔案。

- 記錄檔案格式： `hw_game_history_{form_id}.json`

#### 沒有 form_id 或找不到對應的 JSON

詢問玩家是否有 `form_id`，或是完整的 JSON 紀錄檔案。

> 📜 _檔案室似乎遺失了你的入學編號，請提供你的入學編號或是完整的紀錄檔案。魔法水晶球會協助你找回你遺失的記憶碎片。_

### 紀錄檔案類型

#### 單一存檔紀錄

直接讀取 JSON 記錄內容並恢復遊戲狀態。

#### 多個存檔紀錄

```json
[
  {
    "form_id": ...,
    "savedAt": ...,
    "character": {...},
  },
  {
    "form_id": ...,
    "savedAt": ...,
    "character": {...},
  }
]
```

當有多個存檔紀錄時，顯示記錄列表，僅顯示該記錄檔以下資料：

- `form_id`：遊戲開始的 timestamp，作為遊戲 ID。
- `savedAt`：存檔的劇情時間點。
- `character.name`：玩家名稱。
- `summary`：當前劇情摘要。

並詢問玩家要讀取的記錄點。
