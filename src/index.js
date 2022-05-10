import Keyboard from "./components/keyboard";
import allButtons from "./components/keyboard-array";
import "./style/global.scss";

const keyboard = new Keyboard();

const container = document.createElement("div");
container.classList.add("container");

const textField = document.createElement("textarea");
textField.classList.add("textarea");

const keyboardBlock = document.createElement("div");
keyboardBlock.classList.add("keyboard");

document.body.appendChild(container);
container.appendChild(textField);
container.appendChild(keyboardBlock);

const language = "english";

function createButton(englishLetter, englishAddLetter, special, russianLetter, russianAddLetter) {
  const buttonBlock = document.createElement("div");
  let engLetter = englishLetter;
  let keyName = "";
  if ((englishLetter.toUpperCase() !== englishLetter && !special)) {
    keyName = `Key${englishLetter.toUpperCase()}`;
  } else if (englishLetter && "1234567890".includes(englishLetter)) {
    keyName = `Digit${englishLetter}`;
  } else if (special) {
    switch (englishLetter) {
      case "Del":
        keyName = "Delete";
        break;

      case "ShiftL":
        keyName = "ShiftLeft";
        engLetter = englishLetter.slice(0, -1);
        break;
      case "ShiftR":
        keyName = "ShiftRight";
        engLetter = englishLetter.slice(0, -1);
        break;
      case "CtrlL":
        keyName = "ControlLeft";
        engLetter = englishLetter.slice(0, -1);
        break;
      case "CtrlR":
        keyName = "ControlRight";
        engLetter = englishLetter.slice(0, -1);
        break;
      case "AltR":
        keyName = "AltRight";
        engLetter = englishLetter.slice(0, -1);
        break;
      case "AltL":
        keyName = "AltLeft";
        engLetter = englishLetter.slice(0, -1);
        break;
      case "Win":
        keyName = "Meta";
        break;

      default:
        keyName = engLetter;
    }
  } else {
    switch (engLetter) {
      case "`":
        keyName = "Backquote";
        break;
      case "-":
        keyName = "Minus";
        break;
      case "=":
        keyName = "Equal";
        break;
      case "[":
        keyName = "BracketLeft";
        break;
      case "]":
        keyName = "BracketRight";
        break;
      case "\\":
        keyName = "Backslash";
        break;
      case ";":
        keyName = "Semicolon";
        break;
      case "'":
        keyName = "Quote";
        break;
      case ",":
        keyName = "Comma";
        break;
      case ".":
        keyName = "Period";
        break;
      case "/":
        keyName = "Slash";
        break;
      case "\u2191":
        keyName = "ArrowUp";
        break;
      case "\u2190":
        keyName = "ArrowLeft";
        break;
      case "\u2193":
        keyName = "ArrowDown";
        break;
      case "\u2192":
        keyName = "ArrowRight";
        break;
      case "":
        keyName = "Space";
        break;

      default:
        keyName = engLetter;
    }
  }

  buttonBlock.classList.add("keyboard__button", "button", keyName);

  buttonBlock.innerText = engLetter;
  if (englishAddLetter) {
    const additionalLetterBlock = document.createElement("div");
    additionalLetterBlock.classList.add("button__additional-letter");
    additionalLetterBlock.innerText = englishAddLetter;
    buttonBlock.appendChild(additionalLetterBlock);
  }

  keyboard.createNewButton(
    keyName,
    [englishLetter, englishAddLetter, special, russianLetter, russianAddLetter],
  );
  keyboardBlock.appendChild(buttonBlock);
}

allButtons.forEach((btn) => createButton(...btn));

function liftUpKey(event) {
  console.log(event);
  const key = keyboardBlock.querySelector(`.${[event.code]}`);
  key.classList.remove("button_pressed");
}

function pressedKey(event) {
  event.preventDefault();
  if (event.repeat) {
    return "sameBtn";
  }
  console.log(event);

  const key = keyboardBlock.querySelector(`.${[event.code]}`);
  key.classList.add("button_pressed");
  document.addEventListener("keyup", liftUpKey);
  return "success";
}

document.addEventListener("keydown", pressedKey);
