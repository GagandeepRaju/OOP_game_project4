/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrases = [
  "how are you",
  "you win",
  "tree house team",
  "full stack",
  "keep going",
];

const startBtn = document.querySelector("#btn__reset");
const ovlyStart = document.querySelector(".start");
const phraseSection = document.querySelector("#phrase");

const screenKey = document.querySelectorAll("button");

const game = new Game(phrases);
const phrase = new Phrase();
//start Button Click event
startBtn.addEventListener("click", (event) => {
  //display none
  game.startGame();
});

for (let i = 1; i < screenKey.length; i++) {
  screenKey[i].addEventListener("click", (event) => {
    let word = event.target.innerText;
    word += "";
    game.handleInteraction(word, event);
  });
}
