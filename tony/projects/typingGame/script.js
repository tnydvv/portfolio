// List of words for game
import { WORDS } from "./words.js";

const difficultySelect = document.getElementById("difficulty");
const endgameEl = document.getElementById("end-game-container");
const scoreEl = document.getElementById("score");
const settings = document.getElementById("settings");
const settingsBtn = document.getElementById("settings-btn");
const text = document.getElementById("text");
const timeEl = document.getElementById("time");
const settingsForm = document.getElementById("settings-form");
const word = document.getElementById("word");

// Enum of difficulty
const DIFFICULTY = {
  HARD: String("hard"),
  MEDIUM: String("medium"),
  EASY: String("easy"),
};
Object.freeze(DIFFICULTY); // make immutable

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in localStorage or 'medium'
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : DIFFICULTY.MEDIUM;

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : DIFFICULTY.MEDIUM;

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = "flex";
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = "";

    time =
      difficulty === DIFFICULTY.HARD
        ? (time += 2)
        : difficulty === DIFFICULTY.MEDIUM
        ? (time += 3)
        : (time += 5);

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

// Settings select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
