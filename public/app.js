(function () {
  "use strict";

  var STORE_KEY = "s63-progress-v1";
  var ALL = window.CARDS.map(function (c, i) {
    return Object.assign({ id: i }, c);
  });

  // progress: { [id]: "got" | "miss" }
  var progress = loadProgress();

  var state = {
    chapter: "All chapters",
    dueOnly: false,
    deck: [],
    idx: 0,
    flipped: false,
  };

  // ---- elements ----
  var el = {
    chapter: document.getElementById("chapter"),
    dueOnly: document.getElementById("dueOnly"),
    shuffle: document.getElementById("shuffle"),
    reset: document.getElementById("reset"),
    card: document.getElementById("card"),
    frontChapter: document.getElementById("front-chapter"),
    frontText: document.getElementById("front-text"),
    backChapter: document.getElementById("back-chapter"),
    backKey: document.getElementById("back-key"),
    backText: document.getElementById("back-text"),
    grade: document.getElementById("grade"),
    got: document.getElementById("got"),
    miss: document.getElementById("miss"),
    prev: document.getElementById("prev"),
    next: document.getElementById("next"),
    position: document.getElementById("position"),
    stats: document.getElementById("stats"),
    count: document.getElementById("count"),
  };

  // ---- init chapter dropdown ----
  var chapters = ["All chapters"].concat(uniqueChapters());
  chapters.forEach(function (ch) {
    var opt = document.createElement("option");
    opt.value = ch;
    opt.textContent = ch;
    el.chapter.appendChild(opt);
  });
  el.count.textContent = ALL.length;

  // ---- events ----
  el.chapter.addEventListener("change", function () {
    state.chapter = el.chapter.value;
    buildDeck();
  });
  el.dueOnly.addEventListener("change", function () {
    state.dueOnly = el.dueOnly.checked;
    buildDeck();
  });
  el.shuffle.addEventListener("click", function () {
    shuffle(state.deck);
    state.idx = 0;
    render();
  });
  el.reset.addEventListener("click", function () {
    if (!confirm("Reset all progress on every card?")) return;
    progress = {};
    saveProgress();
    buildDeck();
  });

  el.card.addEventListener("click", flip);
  el.card.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
  });
  el.next.addEventListener("click", function () { move(1); });
  el.prev.addEventListener("click", function () { move(-1); });
  el.got.addEventListener("click", function () { grade("got"); });
  el.miss.addEventListener("click", function () { grade("miss"); });

  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "SELECT") return;
    switch (e.key) {
      case " ": e.preventDefault(); flip(); break;
      case "ArrowRight": move(1); break;
      case "ArrowLeft": move(-1); break;
      case "1": grade("miss"); break;
      case "2": grade("got"); break;
    }
  });

  // ---- core ----
  function buildDeck() {
    var deck = ALL.filter(function (c) {
      var chapterOk = state.chapter === "All chapters" || c.chapter === state.chapter;
      var dueOk = !state.dueOnly || progress[c.id] !== "got";
      return chapterOk && dueOk;
    });
    state.deck = deck;
    state.idx = 0;
    render();
  }

  function render() {
    var deck = state.deck;
    if (deck.length === 0) {
      el.card.style.display = "none";
      el.grade.style.display = "none";
      el.position.textContent = "";
      el.stats.innerHTML =
        '<span class="empty">🎉 Nothing here — every card in this filter is marked “Got it”. ' +
        "Turn off the focus filter or reset progress.</span>";
      return;
    }
    el.card.style.display = "";
    el.grade.style.display = "flex";

    if (state.idx >= deck.length) state.idx = deck.length - 1;
    var c = deck[state.idx];

    // Snap back to the front with no animation, so the new card's answer
    // never flashes while the previous card is rotating back.
    el.card.classList.add("no-anim");
    state.flipped = false;
    el.card.classList.remove("flipped");
    void el.card.offsetWidth; // force reflow so the snap applies before re-enabling
    el.card.classList.remove("no-anim");

    el.frontChapter.textContent = c.chapter;
    el.backChapter.textContent = c.chapter;
    el.frontText.textContent = c.front;
    el.backKey.textContent = c.key;
    el.backText.textContent = c.back;

    el.position.textContent = (state.idx + 1) + " / " + deck.length;
    renderStats();
  }

  function renderStats() {
    var scope = state.deck;
    var got = 0, miss = 0, unseen = 0;
    scope.forEach(function (c) {
      if (progress[c.id] === "got") got++;
      else if (progress[c.id] === "miss") miss++;
      else unseen++;
    });
    el.stats.innerHTML =
      '<span>In view: <b>' + scope.length + "</b></span>" +
      '<span class="got-c">Got: <b>' + got + "</b></span>" +
      '<span class="miss-c">Missed: <b>' + miss + "</b></span>" +
      "<span>Unseen: <b>" + unseen + "</b></span>";
  }

  function flip() {
    state.flipped = !state.flipped;
    el.card.classList.toggle("flipped", state.flipped);
  }

  function move(dir) {
    if (state.deck.length === 0) return;
    state.idx = (state.idx + dir + state.deck.length) % state.deck.length;
    render();
  }

  function grade(result) {
    if (state.deck.length === 0) return;
    var c = state.deck[state.idx];
    progress[c.id] = result;
    saveProgress();
    // advance to next card
    if (state.idx < state.deck.length - 1) {
      state.idx += 1;
      render();
    } else {
      // last card: re-render (may drop out if dueOnly filter is on)
      if (state.dueOnly) buildDeck();
      else render();
    }
  }

  // ---- helpers ----
  function uniqueChapters() {
    var seen = {}, out = [];
    ALL.forEach(function (c) {
      if (!seen[c.chapter]) { seen[c.chapter] = true; out.push(c.chapter); }
    });
    return out;
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(progress));
    } catch (e) { /* ignore */ }
  }

  // ---- go ----
  buildDeck();
})();
