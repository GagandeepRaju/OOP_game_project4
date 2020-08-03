/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor() {
    this.phrase = null;
  }
  /*setter for phrase class*/
  set activePhrase(phr) {
    this.phrase = phr;
  }
  /*addphrasetoDisplay method is called from the startGame method when the active phrase is set in the phrase class
    creating new elements for the screen and loop through the string and creating element accordingly setting attributes 
    accordigly*/
  addPhraseToDisplay() {
    let phrList = phraseSection;
    const unList = document.createElement("ul");
    phrList = phrList.appendChild(unList);

    for (let x of this.phrase) {
      if (x === " ") {
        let space = document.createElement("span");
        space.innerText = x;
        space.classList.add("space");
        phrList.appendChild(space);
      } else {
        let list = document.createElement("li");
        list.innerText = x;
        list.classList.add("hide");
        list.classList.add("letter");
        list.classList.add(x);
        phrList.appendChild(list);
      }
    }
  }

  /*checkLetter method performs, scanning the letter through the phrase and return result if the letter is in the phrase 
    or not*/
  checkLetter(letter) {
    let match = false;
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter === this.phrase[i]) {
        match = true;
        return match;
      }
    }
    return match;
  }
  /*showMatchedLetter method is called from the game class if the letter is present in the phrase css classes will be appied to
    turn the visibility*/
  showMatchedLetter(letter) {
    let chkClass = document.querySelectorAll(`li.${letter}`);

    for (let i = 0; i < chkClass.length; i++) {
      for (let j = 0; j < chkClass[i].classList.length; j++) {
        if (chkClass[i].classList[j] === "chosen") {
          break;
        } else {
          chkClass[i].classList.add("chosen");
        }
      }
    }
  }
}
