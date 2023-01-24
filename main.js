let sequence = [];
let userSequence = [];
let level;
let highScore = 0;

const board = document.querySelector(".board");
const startButton = document.getElementById("play");
const info = document.getElementById("info");
const highScoreText = document.getElementById("high-score");
const levelText = document.getElementById("level");

const tiles = ["green", "red", "yellow", "blue"];

startButton.addEventListener("click", startGame);
board.addEventListener("click", (event) => {
  const { tile } = event.target.dataset;
  if (tile) handleClick(tile);
});

function startGame() {
  startButton.classList.add("hidden");
  info.innerText = "Watch the sequence carefully!";
  level = 0;
  document.body.style.background = "linear-gradient(to top, #87b7ff, #6f7cf5)";
  levelUp();
}

function levelUp() {
    level = level + 1;
    userSequence = [];
    board.classList.add("unclickable");
    info.innerText = "Watch the sequence!";
    levelText.innerText = level;
  
    sequence.push(getRandomColor());
    playSequence(sequence);
  
    setTimeout(() => {
      userTurn();
    }, level * 700 + 200);
  }

  function getRandomColor() {
    const randomColor = tiles[Math.floor(Math.random() * tiles.length)];
    return randomColor;
  }
  
  function playSequence(sequence) {
    sequence.forEach((color, index) => {
      setTimeout(() => {
        activateTile(color);
      }, index * 700);
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
  
  function userTurn() {
    board.classList.remove("unclickable");
    info.innerText = "Your turn!";
  }
  