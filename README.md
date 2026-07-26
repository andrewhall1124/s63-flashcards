# Series 63 — Numbers Flashcards

A tiny flashcard web app for drilling the numeric facts on the Series 63 exam
(registration windows, net-worth minimums, dollar thresholds, statutes of limitations, etc.).

The deck is built from the *Series 63 Prep* notes and is deliberately focused on **the numbers**:
each card asks a question and the back shows the number big, plus a one-line detail.

## Features

- 44 cards across all 6 chapters
- Filter by chapter
- "Focus on cards I don't know" mode
- Shuffle
- Grade each card ✓ Got it / ✗ Didn't know — progress saved in your browser (localStorage)
- Keyboard shortcuts: `space` flip · `←`/`→` move · `1` miss · `2` got

## Run locally

```bash
npm install
npm start
# open http://localhost:3000
```

## Deploy

Runs as a static site behind a minimal Express server. On Railway, `npm start` serves
`public/` on `$PORT`. Health check at `/healthz`.

## Editing the deck

All cards live in [`public/cards.js`](public/cards.js) as a plain array — add or edit entries there.
