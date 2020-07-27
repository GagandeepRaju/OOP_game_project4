/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor() {
    this.phrase = null;
  }

  set activePhrase(phr) {
    this.phrase = phr;
  }

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

  checkLetter(letter) {
    //check letter
    let match = false;
    let index = 0;
    let count = 0;
    let data = [];
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter === this.phrase[i]) {
        index = this.phrase.indexOf(letter, i);
        match = true;
        data.push(match);
        data.push(index);
        let chkClass = document.querySelectorAll(`li.${letter}`)[count];
        if (chkClass.classList[3] === undefined) {
          return data;
        } else if (chkClass.classList[3] === "chosen") {
          count += 1;
          data = [];
        }
      }
    }
    return match;
  }

  showMatchedLetter(index) {
    let wordIndex = phraseSection.children[0].children[index];
    for (let i = 0; i < wordIndex.classList.length; i++) {
      if (wordIndex.classList[i] === "chosen") {
        break;
      } else {
        wordIndex.classList.add("chosen");
      }
    }
  }
}
