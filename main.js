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