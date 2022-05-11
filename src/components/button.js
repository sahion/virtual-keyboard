import Language from "./language";

export default class {
  constructor(englishLetter, englishAddLetter, special, russianLetter, russianAddLetter) {
    const button = this;
    this.languages = {};
    button.special = special;
    button.languages.english = new Language(englishLetter, englishAddLetter);
    if (russianLetter) {
      button.languages.russian = new Language(russianLetter, russianAddLetter);
    }
  }
}
