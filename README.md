Deployed - https://graham-usa.github.io/Simon-says-game/


# Unit1-Project
SImon says Game


<p>This is my version of one of my favorite games as a child. Simon Says! <em>Beat all 12 levels and brag to your friends.</em></p>
<p>This is  my first project as a student at   General Assembly Software Engineering Immersive. It is coded in HTML, CSS, and  JavaScript.</p>

<h3>HOW TO PLAY / Functions</h3>
<ul>
  <li>Click "PLAY" button to begin the game.</li>
  <li>The computer sequence will play.</li>
  <li>Once the computer's sequence ends, it is the user's turn. Click the tiles in the order it was displayed.</li>
  <li>If the sequence matches the computer's, you will move to the next round. Each round will add one more tile to the sequence.</li>
</ul>

<h3>User Coding Detail</h3>
 
 I want to click a button to start the game.

```
  startButton.addEventListener("click", startGame);
  startButton.classList.add("hidden");
  info.innerText = "Watch the sequence carefully!";
  level = 0;
  ```

  I want every level up to add one tile to the computer sequence.

```
  sequence.push(getRandomColor());
  playSequence(sequence);

```
  I want a randomly generated computer sequence to play.


  const randomColor = tiles[Math.floor(Math.random() * tiles.length)];
  return randomColor;


 I want the computer's sequence to illuminate tiles and play a corresponding sound at a timed interval.

```
  function playSequence(sequence) {
    sequence.forEach((color, index) => {
      setTimeout(() => {
        activateTile(color);
      }, index * 650);
    });
  }

  function activateTile(color) {
    const tile = document.querySelector(`[data-tile='${color}']`);
    const sound = document.querySelector(`[data-sound='${color}']`);

    tile.classList.remove("inactive");
    sound.play();

    setTimeout(() => {
      tile.classList.add("inactive");
    }, 300);
  }
```

 I want to click the tiles, only when it is my turn.

```

  function userTurn() {
    board.classList.remove("unclickable");
    info.innerText = "Your turn!";
  }
```

 I want my clicks' values be stored.
```

  board.addEventListener("click", (event) => {
  const { tile } = event.target.dataset;
  if (tile) handleClick(tile);
});

  userSequence.push(tile);

```
 If my sequence is wrong at any point, then I want the game to end.

```
  for (let i = 0; i < userSequence.length; i++) {
    if (userSequence[i] !== sequence[i]) {
      reset();
      return;
    }
  }
```

 If I enter the correct sequence, then I want to level up. If I have beaten a specific number of rounds, then I want to win the game.

```
  if (userSequence.length === sequence.length) {
    if (level === 5) {
      winGame();
    } else {
      info.innerText = "You're doing great! Keep it up!";
      setTimeout(levelUp, 1200);
      return;
    }
  }
```

 I want to see the screen change upon a win and a loss. I want my high score to be recorded. I also want to be able to replay.


//loss
```
    const sound = document.querySelector(`[data-sound='game-over']`);
    sound.play();
    
    document.body.style.background = "linear-gradient(to top, #EA8F8F, #C12727)";
    info.innerText = "Game over! 😈 Play again?";
    ```
//win
   ```
   const sound = document.querySelector(`[data-sound='game-win']`);
    sound.play();
    
    document.body.style.background = "linear-gradient(to top, #BEF1CB, #60BC77)";
    info.innerText = "Amazing work! 🤩 You win!";
   
   ```
//reset
```
    sequence = [];
    userSequence = [];
    level = 0;
        ```
//start button appears, board unclickable
```
    startButton.classList.remove("hidden");
    board.classList.add("unclickable");
```

 I want my high score to be updated and recorded.

```
    if (highScore < level) {
      highScore = level;
    }
    
    highScoreText.innerText = highScore;
```
