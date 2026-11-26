[![The Printer Finally Answers](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/stia-mora/printer-finally-answers-20261126/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907/leaderboard)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/stia-mora/printer-finally-answers-20261126/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

# The Printer Finally Answers

An entry for the make.fun bounty [The Printer Finally Answers](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907): one line, written as the office printer's own comeback to everyone who jams it, thumps it and stares at its error codes. The machine is weary, literal and faintly passive-aggressive — it has counted every sheet it ever fed, and it keeps the receipts.

## The line

> I have fed 41,902 sheets. You jammed 3,104 of them and hit me for every single one. I keep the receipts.

## How to run

Requires Node 22 or later:

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (UTF-8, one line, 104 characters). The program self-checks the line first: it throws if the line is empty, only whitespace, or outside 1–240 characters.
