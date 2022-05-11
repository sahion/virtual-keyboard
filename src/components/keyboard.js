import Button from "./button";

export default class {
  constructor() {
    const keyboard = this;

    this.createNewButton = function func(buttonName, buttonArgs) {
      keyboard[buttonName] = new Button(...buttonArgs);
    };
  }
}
