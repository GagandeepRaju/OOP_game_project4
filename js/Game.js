/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor(phrases) {
    //
    this.missed = 0;
    this.activePhrase = null;
    this.phrases = phrases;
    this.result = null;
  }

  /*startGame() method perform the change over from start screen to Gameboard screen 
    and get a random phrase and assign it to active phrase for game and pass it to phrase
    class to display on the screen*/
  startGame() {
    ovlyStart.style.display = "none";
    this.activePhrase = this.RandomPhrase;
    phrase.activePhrase = this.activePhrase;
    phrase.addPhraseToDisplay();
  }

  /*setter for the result parameter to update the result either win or lose based on 
    game of state*/
  set updateResult(status) {
    this.result = status;
  }

  /*getter for the random phrase from the game class phrases parameter array
   */
  get RandomPhrase() {
    let ranNum = Math.floor(Math.random() * 5);
    return this.phrases[ranNum];
  }
  /*resetting the game parameters like missed parameter, phrase array list clean up, keyboard key reset(remove class, enable)
    if any lifes reset if any lifes were lost in the previous game*/
  resetGame() {
    this.missed = 0;
    let UlList = document.getElementById("phrase").children[0];
    document.getElementById("phrase").removeChild(UlList);
    const keyBoard = document.querySelectorAll(".wrong");
    const lifes = document.querySelectorAll(".tries");
    for (let i = 0; i < keyBoard.length; i++) {
      keyBoard[i].classList.remove("wrong");
      keyBoard[i].disabled = false;
    }

    for (let i = 0; i < lifes.length; i++) {
      lifes[i].childNodes[0].src = "images/liveHeart.png";
    }
  }

  /* if the keybaord pressed is in the phrase then checkForWin method will check if the user has won the game yet or not if
     gameOver method will be called*/
  checkForWin() {
    const chosen = document.querySelectorAll("li.chosen");
    const space = document.querySelectorAll("span.space");
    const stringLength = this.activePhrase.length;
    const result = stringLength - space.length;
    if (chosen.length === result) {
      this.result = "You Win!";
      this.gameOver();
    }
  }
  /*game method will change the screen based on the state of Game win/lose and update the messgae accordingly*/
  gameOver() {
    ovlyStart.style.display = "";
    if (this.result === "You Win!") {
      ovlyStart.classList.remove("lose");
      ovlyStart.classList.add("win");
      this.resetGame();
    } else {
      ovlyStart.classList.remove("win");
      ovlyStart.classList.add("lose");
      this.resetGame();
    }
    document.getElementById("game-over-message").innerText = this.result;
    document.getElementById("btn__reset").innerText = "Play Again";
  }
  /*if the key pressed is not found in phrase then 1 life will be lost and gameOver will be called after 5 wrong key press*/
  removeLife() {
    const scoreBoard = document.querySelectorAll(".tries");
    let index = scoreBoard.length - this.missed - 1;

    let scoreBoardEl = scoreBoard[index].childNodes[0];

    scoreBoardEl.src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed >= 5) {
      this.gameOver();
    }
  }
  /*hanleInteraction will is performing the checkLetter method on phrase and any wrong key detection will call removeLife 
    method to remove 1 life or any correct key will be enable on the phrase by calling showMatchedLetter with index on the 
    screen and checkForWin will be called
    if the keypress event happen then handling the key accordigly is also implemented*/
  handleInteraction(word) {
    const data = phrase.checkLetter(word);
    const match = data[0];
    const index = data[1];
    let key = "";
    if (!match) {
      if (event.type == "keydown") {
        key = document.querySelectorAll(`.key`);
        for (let i = 0; i < key.length; i++) {
          if (key[i].innerText === event.key) {
            key = key[i];
          }
        }
      } else {
        key = event.target;
      }
      key.classList.add("wrong");
      key.disabled = true;
      game.removeLife();
      game.updateResult = "Sorry, try again next time!";
    } else {
      phrase.showMatchedLetter(index);
      this.checkForWin();
    }
  }
}
