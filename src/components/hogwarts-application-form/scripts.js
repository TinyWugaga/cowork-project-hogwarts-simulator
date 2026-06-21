// ── Field config ──
const FIELDS = [
  // PAGE 0 ─ 個人資訊
  {
    page: 0,
    section: "個人資訊",
    id: "name",
    label: "姓名",
    hint: "＊使用語言會影響遊戲過程中，其餘角色名稱的顯示方式",
    type: "text",
    placeholder: "請輸入姓名⋯",
  },
  {
    page: 0,
    section: "個人資訊",
    id: "nick",
    label: "暱稱",
    hint: "當 NPC 關係進展到一定程度時，有可能會更改稱呼",
    type: "text",
    placeholder: "請輸入暱稱⋯（可留空）",
  },
  {
    page: 0,
    section: "個人資訊",
    id: "gender",
    label: "性別",
    type: "tags",
  },
  {
    page: 0,
    section: "個人資訊",
    id: "bd",
    label: "生日",
    hint: "＊星座會影響隨機生成玩家性格",
    type: "text",
    placeholder: "請輸入生日月份與日期，例：7月12日",
  },
  {
    page: 0,
    section: "個人資訊",
    id: "mbti",
    label: "MBTI",
    hint: "＊MBTI 會影響系統生成行動選項",
    type: "tags",
  },
  {
    page: 0,
    section: "個人資訊",
    id: "pers",
    label: "性格傾向",
    hint: "可複選，建議 2–4 個 ＊性格會影響系統生成行動選項",
    type: "tags",
    expand: {
      inputType: "textarea",
      placeholder: "請輸入自訂性格⋯",
      chips: true,
      btnLabel: "加入",
    },
  },
  {
    page: 0,
    section: "個人資訊",
    id: "look",
    label: "長相敘述",
    hint: "若無則隨機生成",
    type: "textarea",
    placeholder: "可自由描述玩家外貌⋯，包含身高、髮色、眼睛顏色、體型等",
    minHeight: 80,
  },
  // PAGE 1 ─ 家庭資訊
  {
    page: 1,
    section: "家庭資訊",
    id: "origin",
    label: "家族血統",
    type: "tags",
  },
  {
    page: 1,
    section: "家庭資訊",
    id: "fam",
    label: "家庭氛圍",
    type: "tags",
    expand: { inputType: "textarea", placeholder: "請描述家庭氛圍⋯" },
  },
  {
    page: 1,
    section: "家庭資訊",
    id: "mem",
    label: "其他家庭成員",
    type: "tags",
    expand: {
      inputType: "textarea",
      placeholder: "請描述家庭成員組成⋯，如有兄弟姐妹、寵物等",
    },
  },
  // PAGE 2 ─ 入學資訊
  {
    page: 2,
    section: "入學資訊",
    id: "house",
    label: "學院",
    type: "tags",
  },
  {
    page: 2,
    section: "入學資訊",
    id: "wand",
    label: "魔杖",
    type: "tags",
    expand: {
      inputType: "text",
      placeholder: "請描述你的魔杖（木材、芯、長度等）⋯",
      chips: true,
      btnLabel: "確認",
    },
  },
  {
    page: 2,
    section: "入學資訊",
    id: "tal",
    label: "入學後天賦及興趣",
    hint: "可複選",
    type: "tags",
    expand: {
      inputType: "text",
      placeholder: "請輸入自訂天賦⋯",
      chips: true,
      btnLabel: "加入",
    },
  },
  // PAGE 3 ─ 遊戲劇情偏好
  {
    page: 3,
    section: "遊戲劇情偏好",
    id: "era",
    label: "時代背景",
    hint: "可複選",
    type: "tags",
    expand: {
      inputType: "text",
      placeholder: "請輸入自訂時代背景⋯",
      chips: true,
      btnLabel: "加入",
    },
  },
  {
    page: 3,
    section: "遊戲劇情偏好",
    id: "sub",
    label: "隱藏支線",
    type: "tags",
  },
  {
    page: 3,
    section: "遊戲劇情偏好",
    id: "npc",
    label: "與原著 NPC 之關係",
    hint: "可複選",
    type: "tags",
    expand: {
      inputType: "textarea",
      placeholder: "請描述與 NPC 的關係⋯，如：朋友、敵人，入學後相識等",
      chips: true,
      btnLabel: "加入",
    },
  },
  {
    page: 3,
    section: "遊戲劇情偏好",
    id: "scene",
    label: "遊戲開始場景",
    hint: "若無則依玩家設定自動生成",
    type: "textarea",
    placeholder: "描述遊戲開始時的場景⋯，如：早晨、玩家所在地點、季節氛圍等",
    minHeight: 80,
  },
  {
    page: 3,
    section: "其他補充設定",
    id: "extra",
    label: null,
    type: "textarea",
    placeholder: "任何其他你想添加的故事設定⋯",
    minHeight: 100,
  },
];

// ── Tag definitions ──
const TDEFS = {
  gender: { multi: false, opts: ["女", "男"] },
  mbti: {
    multi: false,
    opts: [
      "INTJ",
      "INTP",
      "ENTJ",
      "ENTP",
      "INFJ",
      "INFP",
      "ENFJ",
      "ENFP",
      "ISTJ",
      "ISFJ",
      "ESTJ",
      "ESFJ",
      "ISTP",
      "ISFP",
      "ESTP",
      "ESFP",
    ],
  },
  origin: {
    multi: false,
    opts: [
      "純血（家長皆是巫師）",
      "混血（一方巫師一方麻瓜）",
      "麻瓜（家長皆是麻瓜）",
    ],
  },
  fam: {
    multi: false,
    opts: ["熱鬧", "冷淡", "開放", "貴族", "嚴肅", "緊密", "其他", "隨機"],
    custom: "其他",
  },
  mem: { multi: false, opts: ["自訂", "隨機"], custom: "自訂" },
  house: {
    multi: false,
    opts: ["葛來分多", "史萊哲林", "赫夫帕夫", "雷文克勞", "於分類帽儀式決定"],
  },
  wand: { multi: false, opts: ["指定", "隨機"], custom: "指定" },
  tal: {
    multi: true,
    opts: [
      "黑魔法防禦術",
      "變形學",
      "魔藥學",
      "魔法史",
      "天文學",
      "符咒學",
      "藥草學",
      "飛行學",
      "魁地奇",
      "奇獸飼育學",
      "麻瓜研究",
      "算命學",
      "占卜學",
      "古代神秘文字研究",
      "隨機",
    ],
  },
  era: {
    multi: true,
    opts: [
      "現代時空背景",
      "原著時空背景",
      "原著故事線",
      "接續原著故事線",
      "自訂",
    ],
    custom: "自訂",
  },
  sub: { multi: false, opts: ["直接開啟", "逐步開啟", "隨機"] },
  npc: { multi: false, opts: ["自訂", "隨機"], custom: "自訂" },
  pers: {
    multi: true,
    opts: [
      "勇敢",
      "豪爽",
      "正義",
      "守信",
      "果決",
      "聰明",
      "野心",
      "高傲",
      "神秘",
      "善良",
      "溫柔",
      "細心",
      "活潑",
      "熱心",
      "冷靜",
      "敏銳",
      "沉默",
      "謹慎",
      "博學",
      "其他",
      "隨機",
    ],
    custom: "其他",
  },
};

const SEL = {};
Object.keys(TDEFS).forEach((k) => {
  SEL[k] = TDEFS[k].multi ? [] : "";
});

const CONFIRMED = {};

// ── localStorage ──
const STORAGE_KEY = "hw_game_config";
let FORM_ID = "";

function generateFormId() {
  const now = new Date();
  return (
    now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0") +
    "_" +
    String(now.getHours()).padStart(2, "0") +
    String(now.getMinutes()).padStart(2, "0") +
    String(now.getSeconds()).padStart(2, "0")
  );
}

function saveToStorage(currentPage) {
  const data = {
    form_id: FORM_ID,
    currentPage: currentPage !== undefined ? currentPage : 0,
    inputs: {
      name: (document.getElementById("f-name") || {}).value || "",
      nick: (document.getElementById("f-nick") || {}).value || "",
      bd: (document.getElementById("f-bd") || {}).value || "",
      look: (document.getElementById("f-look") || {}).value || "",
      scene: (document.getElementById("f-scene") || {}).value || "",
      extra: (document.getElementById("f-extra") || {}).value || "",
    },
    sel: JSON.parse(JSON.stringify(SEL)),
    chips: {
      pers: getChips("pers"),
      wand: getChips("wand"),
      tal: getChips("tal"),
      npc: getChips("npc"),
      era: getChips("era"),
    },
    customInputs: {
      fam: (document.getElementById("ci-fam") || {}).value || "",
      mem: (document.getElementById("ci-mem") || {}).value || "",
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

function restoreFromData(data) {
  if (!data) return;

  // form_id
  if (data.form_id) FORM_ID = data.form_id;

  // text inputs
  if (data.inputs) {
    ["name", "nick", "bd", "look", "scene", "extra"].forEach((id) => {
      const el = document.getElementById("f-" + id);
      if (el && data.inputs[id] !== undefined) el.value = data.inputs[id];
    });
  }

  // tag selections
  if (data.sel) {
    Object.keys(TDEFS).forEach((k) => {
      if (data.sel[k] !== undefined) SEL[k] = data.sel[k];
    });
  }

  // custom text inputs (expand textareas)
  if (data.customInputs) {
    ["fam", "mem"].forEach((k) => {
      const el = document.getElementById("ci-" + k);
      if (el && data.customInputs[k] !== undefined)
        el.value = data.customInputs[k];
    });
  }

  // chips
  if (data.chips) {
    ["pers", "wand", "tal", "npc", "era"].forEach((k) => {
      const ch = document.getElementById("ch-" + k);
      if (!ch) return;
      ch.innerHTML = "";
      const vals = data.chips[k] || [];
      vals.forEach((v) => {
        const c = document.createElement("div");
        c.className = "chip";
        c.dataset.v = v;
        c.innerHTML = `<span>${v}</span><span class="chip-x" onclick="this.parentElement.remove()">✕</span>`;
        ch.appendChild(c);
      });
    });
  }

  renderAll();
  const page = Math.min(data.currentPage || 0, 3);
  go(page);
}

// ── Welcome dialog actions ──
function startNewForm() {
  clearStorage();
  FORM_ID = generateFormId();
  // reset all state
  ["name", "nick", "bd", "look", "extra"].forEach((id) => {
    const el = document.getElementById("f-" + id);
    if (el) el.value = "";
  });
  Object.keys(TDEFS).forEach((k) => {
    SEL[k] = TDEFS[k].multi ? [] : "";
  });
  ["pers", "wand", "tal", "npc", "era"].forEach((k) => {
    const ch = document.getElementById("ch-" + k);
    if (ch) ch.innerHTML = "";
    const ci = document.getElementById("ci-" + k);
    if (ci) ci.value = "";
  });
  ["fam", "mem"].forEach((k) => {
    const ci = document.getElementById("ci-" + k);
    if (ci) ci.value = "";
  });
  renderAll();
  go(0);
  saveToStorage(0);
  document.getElementById("welcome-overlay").classList.remove("open");
}

function continueForm() {
  document.getElementById("welcome-overlay").classList.remove("open");

  // load from existing localStorage
  const saved = loadFromStorage();
  const hadFileHandler = window.isSecureContext && window.showSaveFilePicker;

  showDialog(
    "選擇讀取表單",
    () => {
      showLoadFormDataDialog((stateData) => {
        restoreFromData(stateData);
        saveToStorage(Math.min(stateData.currentPage || 0, 3));
        document.getElementById("welcome-overlay").classList.remove("open");
        toast("表單資料已手動載入。");
      });
    },
    async () => {
      const loadExistStorage = () => {
        restoreFromData(saved);
        document.getElementById("welcome-overlay").classList.remove("open");
        toast("已沿用既有的記憶水晶。");
      };
      if (hadFileHandler) {
        // open file picker
        try {
          const [fileHandle] = await window.showOpenFilePicker({
            startIn: "desktop",
            types: [
              {
                description: "JSON 設定檔",
                accept: { "application/json": [".json"] },
              },
            ],
            multiple: false,
          });
          const file = await fileHandle.getFile();
          const text = await file.text();
          const data = JSON.parse(text);
          // support both new format (with rawState) and legacy format
          const stateData = data.rawState || data;
          restoreFromData(stateData);
          // if loaded from file, update form_id from filename if possible
          const match = fileHandle.name.match(
            /hw_game_config_(\d{8}_\d{6})\.json/,
          );
          if (match) FORM_ID = match[1];
          saveToStorage(Math.min(stateData.currentPage || 0, 3));
          document.getElementById("welcome-overlay").classList.remove("open");
          toast("表單資料已從記憶水晶中還原。");
        } catch (e) {
          if (e.name === "AbortError") {
            loadExistStorage();
          } else {
            toast("無法讀取檔案：" + e.message);
          }
        }
      } else {
        loadExistStorage();
      }
    },
    {
      confirmText: "手動貼上表單",
      cancelText: "讀取既有表單",
      hiddenCancel: !saved && !hadFileHandler,
    },
  );
}

// ── Render fields from config ──
function renderFields() {
  const pages = {};
  for (const f of FIELDS) {
    if (!pages[f.page]) pages[f.page] = {};
    if (!pages[f.page][f.section]) pages[f.page][f.section] = [];
    pages[f.page][f.section].push(f);
  }
  for (const [pg, sections] of Object.entries(pages)) {
    const pageEl = document.getElementById("p" + pg);
    const btnRow = pageEl.querySelector(".btn-row");
    for (const [title, fields] of Object.entries(sections)) {
      const sec = document.createElement("div");
      sec.className = "section";
      const h = document.createElement("div");
      h.className = "section-title";
      h.textContent = title;
      sec.appendChild(h);
      for (const f of fields) sec.appendChild(buildField(f));
      pageEl.insertBefore(sec, btnRow);
    }
  }
}

function buildField(f) {
  const el = document.createElement("div");
  el.className = "field";

  if (f.label !== null) {
    const lbl = document.createElement("div");
    lbl.className = "field-label";
    lbl.appendChild(document.createTextNode(f.label));
    if (f.hint) {
      lbl.append(" ");
      const s = document.createElement("span");
      s.className = "field-hint";
      s.textContent = f.hint;
      lbl.appendChild(s);
    }
    el.appendChild(lbl);
  }

  if (f.type === "text") {
    const inp = document.createElement("input");
    inp.className = "hw-input";
    inp.id = "f-" + f.id;
    inp.placeholder = f.placeholder || "";
    el.appendChild(inp);
  } else if (f.type === "textarea") {
    const ta = document.createElement("textarea");
    ta.className = "hw-input";
    ta.id = "f-" + f.id;
    ta.placeholder = f.placeholder || "";
    ta.style.cssText = `min-height:${f.minHeight || 80}px;resize:vertical`;
    el.appendChild(ta);
  } else if (f.type === "tags") {
    const tg = document.createElement("div");
    tg.className = "tags";
    tg.id = "tg-" + f.id;
    el.appendChild(tg);

    if (f.expand) {
      const ce = document.createElement("div");
      ce.className = "cexp";
      ce.id = "ce-" + f.id;

      if (f.expand.chips) {
        const crow = document.createElement("div");
        crow.className = "crow";
        crow.style.marginTop = "6px";
        const inp =
          f.expand.inputType === "textarea"
            ? document.createElement("textarea")
            : document.createElement("input");
        inp.className = "hw-input";
        inp.id = "ci-" + f.id;
        inp.placeholder = f.expand.placeholder || "";
        if (f.expand.inputType === "textarea")
          inp.style.cssText = "min-height:64px;resize:vertical";
        const btn = document.createElement("button");
        btn.className = "btn-sm";
        btn.textContent = f.expand.btnLabel || "加入";
        btn.onclick = () => addChip(f.id);
        crow.appendChild(inp);
        crow.appendChild(btn);
        ce.appendChild(crow);
        el.appendChild(ce);
        const ch = document.createElement("div");
        ch.className = "chips";
        ch.id = "ch-" + f.id;
        el.appendChild(ch);
      } else {
        const ta = document.createElement("textarea");
        ta.className = "hw-input";
        ta.id = "ci-" + f.id;
        ta.placeholder = f.expand.placeholder || "";
        ta.style.cssText = "min-height:64px;resize:vertical;margin-top:6px";
        ce.appendChild(ta);
        el.appendChild(ce);
      }
    }
  }

  return el;
}

// ── Render tags ──
function renderAll() {
  Object.keys(TDEFS).forEach((k) => {
    const el = document.getElementById("tg-" + k);
    if (!el) return;
    el.innerHTML = "";
    TDEFS[k].opts.forEach((opt) => {
      const t = document.createElement("div");
      t.className = "tag" + (opt === "隨機" ? " rnd" : "");
      t.textContent = opt;
      t.dataset.v = opt;
      t.onclick = () => toggleTag(k, opt);
      el.appendChild(t);
    });
    refreshTags(k);
  });
}

function refreshTags(k) {
  const el = document.getElementById("tg-" + k);
  if (!el) return;
  const def = TDEFS[k];
  el.querySelectorAll(".tag").forEach((t) => {
    const v = t.dataset.v;
    const on = def.multi ? SEL[k].includes(v) : SEL[k] === v;
    t.classList.toggle("sel", on);
    if (v === "隨機") t.classList.toggle("rnd", true);
  });
  if (def.custom) {
    const ce = document.getElementById("ce-" + k);
    if (ce) {
      const active = def.multi
        ? SEL[k].includes(def.custom)
        : SEL[k] === def.custom;
      ce.classList.toggle("open", active);
    }
  }
  const ch = document.getElementById("ch-" + k);
  if (ch) {
    const isRandom = def.multi ? SEL[k].includes("隨機") : SEL[k] === "隨機";
    ch.style.display = isRandom ? "none" : "";
  }
}

function toggleTag(k, val) {
  const def = TDEFS[k];
  if (def.multi) {
    if (val === "隨機") {
      SEL[k] = SEL[k].includes("隨機") ? [] : ["隨機"];
    } else {
      let a = SEL[k].filter((v) => v !== "隨機");
      const i = a.indexOf(val);
      if (i >= 0) a.splice(i, 1);
      else a.push(val);
      SEL[k] = a;
    }
  } else {
    SEL[k] = SEL[k] === val ? "" : val;
  }
  refreshTags(k);
}

function addChip(k) {
  const inp = document.getElementById("ci-" + k);
  const v = inp.value.trim();
  if (!v) return;
  const ch = document.getElementById("ch-" + k);
  const c = document.createElement("div");
  c.className = "chip";
  c.dataset.v = v;
  c.innerHTML = `<span>${v}</span><span class="chip-x" onclick="this.parentElement.remove()">✕</span>`;
  ch.appendChild(c);
  inp.value = "";
}

function getChips(k) {
  const ch = document.getElementById("ch-" + k);
  if (!ch) return [];
  return Array.from(ch.querySelectorAll(".chip")).map((c) => c.dataset.v);
}

// ── Page nav ──
function go(n) {
  for (let i = 0; i < 6; i++) {
    const p = document.getElementById("p" + i);
    if (p) p.style.display = i === n ? "" : "none";
  }
  for (let i = 0; i < 6; i++) {
    const d = document.getElementById("d" + i),
      l = document.getElementById("l" + i);
    d.classList.remove("active", "done");
    l.classList.remove("active");
    if (i < n) d.classList.add("done");
    else if (i === n) {
      d.classList.add("active");
      l.classList.add("active");
    }
  }
  window.scrollTo(0, 0);
  // auto-save on every page transition
  if (FORM_ID) saveToStorage(n);
}

function resolveField(field) {
  switch (field) {
    case "gender":
      return SEL.gender;
    case "house":
      return SEL.house;
    case "pers": {
      if (SEL.pers.includes("隨機")) return "隨機";
      const p = SEL.pers.filter((v) => v !== "其他");
      const custom = getChips("pers");
      return [...p, ...custom].join("、");
    }
    case "look":
      return document.getElementById("f-look").value.trim();
    case "origin":
      return SEL.origin ? SEL.origin.split("（")[0] : "";
    case "fam": {
      if (!SEL.fam) return "";
      if (SEL.fam === "隨機") return "隨機";
      if (SEL.fam === "其他")
        return document.getElementById("ci-fam").value.trim();
      return SEL.fam;
    }
    case "mem": {
      if (!SEL.mem) return "";
      if (SEL.mem === "隨機") return "隨機";
      if (SEL.mem === "自訂")
        return document.getElementById("ci-mem").value.trim();
      return SEL.mem;
    }
    case "wand": {
      if (!SEL.wand) return "";
      if (SEL.wand === "隨機") return "隨機";
      const c = getChips("wand");
      return c[0] || "";
    }
    case "tal": {
      if (SEL.tal.includes("隨機")) return "隨機";
      const t = SEL.tal;
      const custom = getChips("tal");
      return [...t, ...custom].join("、");
    }
    case "era": {
      const selected = SEL.era || [];
      const custom = getChips("era");
      return [...selected, ...custom].join("、") || "";
    }
    case "sub":
      return SEL.sub;
    case "npc": {
      if (!SEL.npc) return "";
      if (SEL.npc === "隨機") return "隨機";
      return getChips("npc").join("、");
    }
    default:
      return "";
  }
}

function buildConfirm() {
  go(4);
  const rows = [
    {
      key: "姓名",
      id: "name",
      val: () => document.getElementById("f-name").value.trim(),
      pg: 0,
    },
    {
      key: "暱稱",
      id: "nick",
      val: () => document.getElementById("f-nick").value.trim(),
      pg: 0,
    },
    {
      key: "性別",
      id: "gender",
      val: () => resolveField("gender"),
      pg: 0,
    },
    {
      key: "生日",
      id: "bd",
      val: () => document.getElementById("f-bd").value.trim(),
      pg: 0,
    },
    { key: "MBTI", id: "mbti", val: () => SEL.mbti, pg: 0 },
    {
      key: "性格傾向",
      id: "pers",
      val: () => resolveField("pers"),
      pg: 0,
    },
    { key: "長相", id: "look", val: () => resolveField("look"), pg: 0 },
    {
      key: "家族血統",
      id: "origin",
      val: () => resolveField("origin"),
      pg: 1,
    },
    { key: "家庭氛圍", id: "fam", val: () => resolveField("fam"), pg: 1 },
    { key: "家庭成員", id: "mem", val: () => resolveField("mem"), pg: 1 },
    { key: "學院", id: "house", val: () => resolveField("house"), pg: 2 },
    { key: "魔杖", id: "wand", val: () => resolveField("wand"), pg: 2 },
    { key: "天賦興趣", id: "tal", val: () => resolveField("tal"), pg: 2 },
    { key: "時代背景", id: "era", val: () => resolveField("era"), pg: 3 },
    { key: "隱藏支線", id: "sub", val: () => resolveField("sub"), pg: 3 },
    { key: "NPC關係", id: "npc", val: () => resolveField("npc"), pg: 3 },
    {
      key: "開始場景",
      id: "scene",
      val: () => document.getElementById("f-scene").value.trim(),
      pg: 3,
    },
  ];

  rows.forEach((r) => {
    CONFIRMED[r.id] = r.val();
  });

  const extra = document.getElementById("f-extra").value.trim();
  const grid = document.getElementById("cgrid");
  grid.innerHTML = "";

  rows.forEach((r) => {
    const v = CONFIRMED[r.id] || "無";
    const row = document.createElement("div");
    row.className = "conf-row";
    row.innerHTML = `
      <div class="conf-key">${r.key}</div>
      <div class="conf-val" id="cv-${r.id}">${v}</div>
      <div class="conf-act"><button class="ed-btn" onclick="go(${r.pg})">編輯</button></div>`;
    grid.appendChild(row);
  });

  const row = document.createElement("div");
  row.className = "conf-row";
  row.innerHTML = `<div class="conf-key">補充設定</div><div class="conf-val">${
    extra || "無"
  }</div><div class="conf-act"><button class="ed-btn" onclick="go(3)">編輯</button></div>`;
  grid.appendChild(row);

  if (!FORM_ID) FORM_ID = generateFormId();

  // save confirmed state
  saveToStorage(4);
}

function buildText() {
  const n = document.getElementById("f-name").value.trim();
  const nick = document.getElementById("f-nick").value.trim();
  const bd = document.getElementById("f-bd").value.trim();
  const mbti = CONFIRMED.mbti;
  const extra = document.getElementById("f-extra").value.trim();
  const lines = [
    "【霍格華茲模擬器：角色設定】",
    "",
    "▌個人資訊",
    `姓名：${CONFIRMED.name || n}`,
  ];
  if (nick) lines.push(`暱稱：${nick}`);
  lines.push(`性別：${CONFIRMED.gender}`);
  if (bd) lines.push(`生日：${bd}`);
  if (mbti) lines.push(`MBTI：${mbti}`);
  lines.push(
    `性格傾向：${CONFIRMED.pers}`,
    `長相：${CONFIRMED.look}`,
    "",
    "▌家庭資訊",
    `家族血統：${CONFIRMED.origin}`,
    `家庭氛圍：${CONFIRMED.fam}`,
    `家庭成員：${CONFIRMED.mem}`,
    "",
    "▌入學資訊",
    `學院：${CONFIRMED.house}`,
    `魔杖：${CONFIRMED.wand}`,
    `天賦興趣：${CONFIRMED.tal}`,
    "",
    "▌劇情偏好",
    `時代背景：${CONFIRMED.era || "原著時空背景"}`,
    `隱藏支線：${CONFIRMED.sub}`,
    `與原著NPC關係：${CONFIRMED.npc}`,
    `開始場景：${CONFIRMED.scene || "自動生成"}`,
  );
  if (extra) lines.push("", "▌補充設定", extra);
  return lines.join("\n");
}

function goToSubmit() {
  document.getElementById("ctxt").textContent = buildText();
  go(5);
}

async function outputConfig() {
  const form_id = FORM_ID || generateFormId();
  const now = new Date();

  // raw state for re-importing later
  const rawState = {
    form_id,
    currentPage: 5,
    inputs: {
      name: document.getElementById("f-name").value.trim(),
      nick: document.getElementById("f-nick").value.trim(),
      bd: document.getElementById("f-bd").value.trim(),
      look: document.getElementById("f-look").value.trim(),
      scene: document.getElementById("f-scene").value.trim(),
      extra: document.getElementById("f-extra").value.trim(),
    },
    sel: JSON.parse(JSON.stringify(SEL)),
    chips: {
      pers: getChips("pers"),
      wand: getChips("wand"),
      tal: getChips("tal"),
      npc: getChips("npc"),
      era: getChips("era"),
    },
    customInputs: {
      fam: (document.getElementById("ci-fam") || {}).value || "",
      mem: (document.getElementById("ci-mem") || {}).value || "",
    },
  };

  const data = {
    form_id,
    createdAt: now.toISOString(),
    name:
      CONFIRMED.name ||
      document.getElementById("f-name").value.trim() ||
      "未命名角色",
    nick: document.getElementById("f-nick").value.trim(),
    gender: CONFIRMED.gender,
    birthday: document.getElementById("f-bd").value.trim(),
    mbti: CONFIRMED.mbti,
    personality: CONFIRMED.pers,
    appearance: CONFIRMED.look,
    bloodStatus: CONFIRMED.origin,
    familyAtmosphere: CONFIRMED.fam,
    familyMembers: CONFIRMED.mem,
    house: CONFIRMED.house,
    wand: CONFIRMED.wand,
    talents: CONFIRMED.tal,
    era: CONFIRMED.era,
    hiddenQuest: CONFIRMED.sub,
    npcRelations: CONFIRMED.npc,
    startScene: CONFIRMED.scene,
    extra: document.getElementById("f-extra").value.trim(),
    rawText: buildText(),
    rawState,
  };
  const json = JSON.stringify(data, null, 2);
  const filename = `hw_game_config_${form_id}.json`;

  // 複製到剪貼簿（使用者可以手動貼到檔案中）
  const copyJsonToClipboard = () => {
    copyToClipboard(json)
      .then(() => toast("申請表單資料已複製至剪貼簿。"))
      .catch((e) => toast(`無法複製到剪貼簿:${e.message}`));
  };

  // showSaveFilePicker + createWritable 需要安全環境（https / localhost）
  // file:// 開啟時 createWritable 會被瀏覽器封鎖，改用複製到剪貼簿
  if (window.isSecureContext && window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        startIn: "desktop",
        suggestedName: filename,
        types: [
          {
            description: "JSON 檔案",
            accept: { "application/json": [".json"] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(json);
      await writable.close();
      toast(`已輸出您的申請表單資料。請查看檔案：${filename}。`);
      return;
    } catch (e) {
      if (e.name === "AbortError") return;
      showDialog(
        `輸出表單的過程發生錯誤：${e.message}，是否改為將資料複製到剪貼簿？`,
        copyJsonToClipboard,
        () => {},
      );
    }
  } else {
    copyJsonToClipboard();
  }
}

function copyFormContent() {
  copyToClipboard(buildText()).then(() =>
    showAlert(
      `已輸出您的入學資料到剪貼簿，這是您的入學編號：${FORM_ID}，請到報到處提交您的申請內容。`,
    ),
  );
}

function showAlert(msg) {
  const cancelBtn = document.getElementById("dialog-cancel");
  cancelBtn.style.display = "none";
  showDialog(msg, () => {
    cancelBtn.style.display = "";
  });
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    document.body.removeChild(ta);
    return Promise.resolve();
  } catch (e) {
    document.body.removeChild(ta);
    return Promise.reject(e);
  }
}

function showLoadFormDataDialog(onLoaded) {
  const overlay = document.getElementById("load-form-data-overlay");
  const textarea = document.getElementById("load-form-data-textarea");
  const errorEl = document.getElementById("load-form-data-error");
  const confirmBtn = document.getElementById("load-form-data-confirm");
  const cancelBtn = document.getElementById("load-form-data-cancel");

  textarea.value = "";
  errorEl.textContent = "";
  overlay.classList.add("open");
  setTimeout(() => textarea.focus(), 80);

  const close = () => {
    overlay.classList.remove("open");
    confirmBtn.removeEventListener("click", doConfirm);
    cancelBtn.removeEventListener("click", doCancel);
  };
  const doConfirm = () => {
    errorEl.textContent = "";
    try {
      const raw = JSON.parse(textarea.value.trim());
      const stateData = raw.rawState || raw;
      close();
      if (onLoaded) onLoaded(stateData);
    } catch (e) {
      errorEl.textContent = "格式錯誤，請確認貼入的是有效的 JSON 資料。";
    }
  };
  const doCancel = () => close();

  confirmBtn.addEventListener("click", doConfirm);
  cancelBtn.addEventListener("click", doCancel);
}

function showDialog(msg, onConfirm, onCancel, opts = {}) {
  const overlay = document.getElementById("dialog-overlay");
  document.getElementById("dialog-msg").textContent = msg;
  const confirmBtn = document.getElementById("dialog-confirm");
  const cancelBtn = document.getElementById("dialog-cancel");
  confirmBtn.textContent = opts.confirmText || "確認";
  cancelBtn.textContent = opts.cancelText || "取消";
  overlay.classList.add("open");

  if (!onConfirm) confirmBtn.setAttribute("disabled", !!onConfirm);
  if (!onCancel) cancelBtn.setAttribute("disabled", !!onCancel);

  if (opts.hiddenCancel) {
    cancelBtn.classList.add("hidden");
  } else {
    cancelBtn.classList.remove("hidden");
  }

  const resetBtns = () => {
    confirmBtn.textContent = "確認";
    cancelBtn.textContent = "取消";
    overlay.classList.remove("open");
  };
  const doOk = () => {
    resetBtns();
    confirmBtn.removeEventListener("click", doOk);
    cancelBtn.removeEventListener("click", doCancel);
    if (onConfirm) onConfirm();
  };
  const doCancel = () => {
    resetBtns();
    confirmBtn.removeEventListener("click", doOk);
    cancelBtn.removeEventListener("click", doCancel);
    if (onCancel) onCancel();
  };
  confirmBtn.addEventListener("click", doOk);
  cancelBtn.addEventListener("click", doCancel);
}

function clearAll() {
  showDialog("確定要清除所有已填資料並重新填寫嗎？", () => {
    clearStorage();
    FORM_ID = generateFormId();
    document.getElementById("f-name").value = "";
    document.getElementById("f-nick").value = "";
    document.getElementById("f-bd").value = "";
    document.getElementById("f-look").value = "";
    document.getElementById("f-scene").value = "";
    document.getElementById("f-extra").value = "";
    Object.keys(TDEFS).forEach((k) => {
      SEL[k] = TDEFS[k].multi ? [] : "";
    });
    ["pers", "wand", "tal", "npc", "era"].forEach((k) => {
      const ch = document.getElementById("ch-" + k);
      if (ch) ch.innerHTML = "";
      const ci = document.getElementById("ci-" + k);
      if (ci) ci.value = "";
    });
    ["fam", "mem"].forEach((k) => {
      const ci = document.getElementById("ci-" + k);
      if (ci) ci.value = "";
    });
    renderAll();
    go(0);
    saveToStorage(0);
  });
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// ── Init ──
renderFields();
renderAll();

// setup welcome dialog
(function initWelcome() {
  // const saved = loadFromStorage();
  const continueBtn = document.getElementById("btn-continue-form");
})();
