/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*Default phrases for the game*/
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
//start/play again Button Click event and calling the start Game method from the Game class
startBtn.addEventListener("click", (event) => {
  //display none
  game.startGame();
});

/*Checking for any key is pressed on the screen and loops thourgh all the keys and execute the handle interaction
  method on the game class*/
for (let i = 1; i < screenKey.length; i++) {
  screenKey[i].addEventListener("click", (event) => {
    let word = event.target.innerText;
    word += "";
    game.handleInteraction(word, event);
  });
}

/*any key pressed if the page is active in the document key has to be between a to z only*/
document.body.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    game.handleInteraction(e.key);
  }
});
