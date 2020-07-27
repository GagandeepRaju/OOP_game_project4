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

  /*Includes startGame() method that hides the start screen overlay, 
    sets the activePhrase property to a random phrase, and calls the 
    addPhraseToDisplay() method on the active phrase*/
  startGame() {
    ovlyStart.style.display = "none";
    this.activePhrase = this.RandomPhrase;
    phrase.activePhrase = this.activePhrase;
    phrase.addPhraseToDisplay();
  }

  set updateResult(status) {
    this.result = status;
  }

  /*Includes getRandomPhrase() method that randomly retrieves one 
    phrase from the phrases array*/

  get RandomPhrase() {
    let ranNum = Math.floor(Math.random() * 5);
    return this.phrases[ranNum];
  }

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

  removeLife() {
    //images/lostHeart.png
    const scoreBoard = document.querySelectorAll(".tries");
    let index = scoreBoard.length - this.missed - 1;

    let scoreBoardEl = scoreBoard[index].childNodes[0];

    scoreBoardEl.src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed >= 5) {
      this.gameOver();
    }
  }

  handleInteraction(word) {
    const data = phrase.checkLetter(word);
    const match = data[0];
    const index = data[1];

    if (!match) {
      let key = event.target;
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
