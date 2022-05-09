import Keyboard from "./components/keyboard";
import allButtons from "./components/keyboard-array";
import "./style/global.scss";


const keyboard = new Keyboard();

function createButton(englishLetter, englishAddLetter, special, russianLetter, russianAddLetter) {
  const buttonBlock = document.createElement("div");
  buttonBlock.classList.add("keyboard__button", "button", 'btn'+englishLetter);

  buttonBlock.innerText = englishLetter;
  if (englishAddLetter) {
    const additionalLetterBlock = document.createElement("div");
    additionalLetterBlock.classList.add("button__additional-letter");
  }

  keyboard.createNewButton(`btn${englishLetter.toUpperCase()}`, [englishLetter, englishAddLetter, special, russianLetter, russianAddLetter]);
  keyboardBlock.appendChild(buttonBlock);
}

const container = document.createElement('div');
container.classList.add('container');

const textField = document.createElement('textarea');
textField.classList.add('text-area');


const keyboardBlock = document.createElement("div");
keyboardBlock.classList.add("keyboard");

document.body.appendChild(container);
container.appendChild(textField);
container.appendChild(keyboardBlock);


for( let btn of allButtons ){
   createButton(...btn);   
}