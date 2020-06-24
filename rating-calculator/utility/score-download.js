const SCORE_URLS = new Map([
  ["Re:MASTER", "/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],
  ["MASTER", "/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],
  ["EXPERT", "/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],
  ["ADVANCED", "/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],
]);

function statusText(difficulty, end) {
  switch (difficulty) {
    case "Re:MASTER":
      return end ? "✔ 白譜成績下載完畢！" : "🕓 下載白譜成績中…";
    case "MASTER":
      return end ? "✔ 紫譜成績下載完畢！" : "🕓 下載紫譜成績中…";
    case "EXPERT":
      return end ? "✔ 紅譜成績下載完畢！" : "🕓 下載紅譜成績中…";
    case "ADVANCED":
      return end ? "✔ 黃譜成績下載完畢！" : "🕓 下載黃譜成績中…";
    case "ALL":
      return "✅ 全部成績下載完畢，請按網頁上的「複製成績」把資料複製到剪貼簿。";
  }
}

function processRow(row, state) {
  const isGenreRow = row.classList.contains("screw_block");
  const isScoreRow = (
    row.classList.contains("w_450")
    && row.classList.contains("m_15")
    && row.classList.contains("p_r")
    && row.classList.contains("f_0")
  );
  if (isGenreRow) {
    state.genre = row.innerText;
  }
  else if (isScoreRow) {
    const songName = row.getElementsByClassName("music_name_block")[0].innerText;
    const level = row.getElementsByClassName("music_lv_block")[0].innerText;    
    let difficulty = row.children[0].className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();
    if (difficulty.indexOf("RE") === 0) {
      difficulty = "Re:MASTER";
    }
    
    let chartType = "DX";
    if (row.id) {
      if (row.id.includes("sta_")) {
        chartType = "STANDARD";
      }
    } else if (row.children[1].src.includes("_standard")) {
      chartType = "STANDARD";
    }
    
    const achievementElem = row.querySelector(".music_score_block.w_120");
    if (!achievementElem) {
      return;
    }
    const achievement = achievementElem.innerText;

    state.scoreList.push([
      songName,
      state.genre,
      difficulty,
      level,
      chartType,
      achievement,
    ].join("\t"));
  }
}

async function fetchScores(url, scoreList) {
  const response = await fetch(url);
  const html = await response.text();
  const parser = new DOMParser();
  const dom = parser.parseFromString(html, "text/html");
  const rows = dom.querySelectorAll(".main_wrapper.t_c .m_15");
  const state = {genre: "", scoreList: scoreList};
  rows.forEach(row => processRow(row, state));
}

function createOutputElement(container) {
  const dv = document.createElement("div");
  dv.style.position = "relative";
  dv.style.marginBottom = "16px";
  
  const tx = document.createElement("textarea");
  dv.appendChild(tx);
  
  const btn = document.createElement("button");
  btn.innerText = "複製成績";
  btn.style.backgroundColor = "#9f51dc";
  btn.style.border = "2px solid black"
  btn.style.borderRadius = "5px"
  btn.style.color = "white"
  btn.style.fontWeight = "700"
  btn.style.padding = "8px 12px";
  dv.appendChild(btn);

  const res = document.createElement("span");
  res.className = "f_16"
  res.style.position = "absolute";
  res.style.left = "300px";
  res.style.bottom = "10px";
  res.style.fontWeight = "700";
  res.style.color = "#fff000";
  dv.appendChild(res);

  btn.addEventListener("click", () => {
    tx.select();
    document.execCommand("copy");
    res.innerText = "已複製到剪貼簿"
    setTimeout(() => {
      res.innerText = "";
    }, 5000);
  });

  container.appendChild(dv);
  return tx
}

async function fetchAllScores(cache, onError, onLog) {
  const host = document.location.host;
  if (host !== "maimaidx-eng.com" && host !== "maimaidx.jp") {
    onError("請登入 maimai NET");
    return;
  }
  const scoreList = [];
  for (const [difficulty, url] of SCORE_URLS) {
    onLog(statusText(difficulty, false));
    await fetchScores(url, scoreList);
    onLog(statusText(difficulty, true));
  }
  const textareaKey = Symbol.for("outputTextarea");
  if (!cache[textareaKey]) {
    cache[textareaKey] = createOutputElement(
      document.querySelector(".main_wrapper header")
    );
  }
  cache[textareaKey].value = scoreList.join("\n");
  onLog(statusText("ALL", true));
}

function handleError(msg) {
  alert(msg);
}

function handleOutput(msg) {
  const comment = document.querySelector(".comment_block");
  if (comment) {
    comment.innerText = comment.innerText + msg + "\n";
  }
  else {
    console.log(msg);
  }
}

fetchAllScores(window, handleError, handleOutput);
