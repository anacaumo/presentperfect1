# Remember when...? 🎮

A team quiz game for English class, designed to run on a projector. It reviews the **present perfect** (have / has + past participle) and the adverbs **already, just, never, yet, ever**, using nostalgic topics students grew up with (slime, fidget spinners, Subway Surfers, Snapchat filters, BeReal and more).

Based on the Day 1 worksheet "Remember when...? Present perfect" (Units 14 and 15, Nostalgia).

## How to play

1. Open `index.html` in a browser (no install, no internet needed except for the pixel font).
2. Choose 2 to 5 teams and type their names.
3. Choose the number of rounds. Every team gets the same number of multiple-choice and true/false questions.
4. Pick a mode:
   - **Chill**: no timer, 1 point per correct answer.
   - **Challenge**: time limit per question, with an optional speed bonus.
5. Each team discusses and picks an answer. Click the feedback box to reveal the explanation (English first, then Portuguese), then click **Next**.
6. At the end the ranking is revealed from last place to the winner.

## Question bank

All the questions are in `questions.js` (40 multiple choice + 44 true/false). The game engine (`game.js`) does not need to change.

Each question has a `topics` list. The game never puts two questions with the same topic in the same game, so one question can't give away the answer to another. When you add a question, reuse the topic id of any question about the same sentence or rule. The comment at the top of `questions.js` explains the format.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure |
| `style.css` | Look and themes |
| `game.js` | Game engine (teams, rounds, timer, scoring, ranking) |
| `questions.js` | The question bank for this class |
