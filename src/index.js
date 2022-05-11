import Keyboard from "./components/keyboard";
import allButtons from "./components/keyboard-array";
import "./style/global.scss";

const keyboard = new Keyboard();

const container = document.createElement("div");
container.classList.add("container");

const textField = document.createElement("textarea");
textField.classList.add("textarea");
textField.readOnly = true;

const information = document.createElement("h2");
information.innerText = "Created on Windows system\nChange language on ctrl+shift combination";

const keyboardBlock = document.createElement("div");
keyboardBlock.classList.add("keyboard");

document.body.appendChild(container);
container.appendChild(textField);
container.appendChild(information);
container.appendChild(keyboardBlock);

const languages = ["english", "russian"];
let language = "english";

let shiftActive = false;
let ctrlActive = false;

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
  const key = keyboardBlock.querySelector(`.${[event.code]}`);
  key.classList.remove("button_pressed");
  if (event.key === "Shift") {
    const buttons = document.querySelectorAll(".button");
    shiftActive = false;
    buttons.forEach((button) => {
      if (button.innerText.length === 1
         && button.innerText !== button.innerText.toLowerCase()) {
        button.innerText = button.innerText.toLowerCase();
      } else if (button.innerText.length === 1
         && button.innerText !== button.innerText.toUpperCase()) {
        button.innerText = button.innerText.toUpperCase();
      } else if (keyboard[button.classList[2]].languages.english
      && keyboard[button.classList[2]].languages.english.additionalLetter) {
        button.innerText = (keyboard[button.classList[2]].languages[language]
          && keyboard[button.classList[2]].languages[language].mainLetter)
          ? keyboard[button.classList[2]].languages[language].mainLetter
          : keyboard[button.classList[2]].languages.english.mainLetter;

        const additionalLetterBlock = document.createElement("div");
        additionalLetterBlock.classList.add("button__additional-letter");
        additionalLetterBlock.innerText = (keyboard[button.classList[2]].languages[language]
          && keyboard[button.classList[2]].languages[language].additionalLetter)
          ? keyboard[button.classList[2]].languages[language].additionalLetter
          : keyboard[button.classList[2]].languages.english.additionalLetter;
        button.appendChild(additionalLetterBlock);
      }
    });
  } else if (event.key === "Control") {
    ctrlActive = false;
  }
}

function changeButtons() {
  const buttons = document.querySelectorAll(".button");
  console.log(buttons[15]);
  const letterCase = (buttons[15].innerText[0] === buttons[15].innerText[0].toUpperCase());
  buttons.forEach((button) => {
    if (!keyboard[button.classList[2]].languages[language]
      || keyboard[button.classList[2]].special) { return "not changed"; }
    if (letterCase) {
      button.innerText = keyboard[button.classList[2]].languages[language].mainLetter.toUpperCase();
    } else {
      button.innerText = keyboard[button.classList[2]].languages[language].mainLetter.toLowerCase();
    }
    if (!keyboard[button.classList[2]].languages.english.additionalLetter
    || (keyboard[button.classList[2]].languages[language]
       && keyboard[button.classList[2]].languages[language].mainLetter.toUpperCase()
       !== keyboard[button.classList[2]].languages[language].mainLetter)) {
      return "additional not changed";
    }
    const additionalLetterBlock = document.createElement("div");
    additionalLetterBlock.classList.add("button__additional-letter");
    additionalLetterBlock.innerText = (keyboard[button.classList[2]].languages[language]
      && keyboard[button.classList[2]].languages[language].additionalLetter)
      ? keyboard[button.classList[2]].languages[language].additionalLetter
      : keyboard[button.classList[2]].languages.english.additionalLetter;
    button.appendChild(additionalLetterBlock);
    return "success";
  });
}

function pressedKey(event) {
  let eventCode = false;
  if (event.type === "keydown") {
    eventCode = event.code;
  } else if (event.type === "click") {
    if (event.target.classList[1] === "button" || event.target.parentElement.classList[1] === "button") {
      eventCode = (event.target.classList[1] === "button")
        ? event.target.classList[2] : (event.target.parentElement.classList[1] === "button")
          ? event.target.parentElement.classList[2] : false;
    }
    if (!eventCode) {
      return "not that type";
    }
  }
  if (eventCode !== "Delete") {
    event.preventDefault();
  }

  if (event.repeat && keyboard[eventCode].special
    && keyboard[eventCode].languages.english.mainLetter !== "Backspace"
    && keyboard[eventCode].languages.english.mainLetter !== "Enter") {
    return "sameBtn";
  }
  const key = keyboardBlock.querySelector(`.${[eventCode]}`);
  if (event.type === "keydown") {
    key.classList.add("button_pressed");
    document.addEventListener("keyup", liftUpKey);
  }

  if ((eventCode.slice(0, 5) === "Shift" && ctrlActive)
  || (eventCode.slice(0, 7) === "Control" && shiftActive)) {
    language = (languages[languages.indexOf(language) + 1])
      ? languages[languages.indexOf(language) + 1] : languages[0];
    changeButtons();
  } if (eventCode.slice(0, 5) === "Shift") {
    shiftActive = !(shiftActive);
    if (shiftActive) {
      key.classList.add("button_pressed");
    } else {
      key.classList.remove("button_pressed");
    }
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      if (button.innerText.length === 1
        && button.innerText !== button.innerText.toUpperCase()) {
        button.innerText = button.innerText.toUpperCase();
      } else if (button.innerText.length === 1
        && button.innerText !== button.innerText.toLowerCase()) {
        button.innerText = button.innerText.toLowerCase();
      } else if (!keyboard[button.classList[2]].special
        && keyboard[button.classList[2]].languages.english
        && keyboard[button.classList[2]].languages.english.additionalLetter) {
        button.innerText = (keyboard[button.classList[2]].languages[language]
          && keyboard[button.classList[2]].languages[language].additionalLetter)
          ? keyboard[button.classList[2]].languages[language].additionalLetter
          : keyboard[button.classList[2]].languages.english.additionalLetter;

        const additionalLetterBlock = document.createElement("div");
        additionalLetterBlock.classList.add("button__additional-letter");
        additionalLetterBlock.innerText = (keyboard[button.classList[2]].languages[language]
          && keyboard[button.classList[2]].languages[language].mainLetter)
          ? keyboard[button.classList[2]].languages[language].mainLetter
          : keyboard[button.classList[2]].languages.english.mainLetter;
        button.appendChild(additionalLetterBlock);
      }
    });
  } else if (eventCode.slice(0, 7) === "Control") {
    ctrlActive = !(ctrlActive);
    if (ctrlActive) {
      key.classList.add("button_pressed");
    } else {
      key.classList.remove("button_pressed");
    }
  } else if (eventCode === "CapsLock") {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      if (button.innerText.length === 1
        && button.innerText !== button.innerText.toLowerCase()) {
        button.innerText = button.innerText.toLowerCase();
      } else if (button.innerText.length === 1
        && button.innerText !== button.innerText.toUpperCase()) {
        button.innerText = button.innerText.toUpperCase();
      }
    });
  } else if (eventCode === "Space") {
    textField.textContent += " ";
  } else if (eventCode === "Backspace") {
    textField.textContent = textField.textContent.slice(0, -1);
  } else if (eventCode === "Enter") {
    textField.textContent += "\n";
  } else if (eventCode === "Tab") {
    textField.textContent += "    ";
  } else if (!keyboard[eventCode].special) {
    textField.textContent += key.innerText.slice(0, 1);
  }
  return "success";
}

document.addEventListener("keydown", pressedKey);
document.addEventListener("click", pressedKey);
