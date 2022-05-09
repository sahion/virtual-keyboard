import Language from "language";


export default {
   button: this,
   languages : {
   },
   constructor(special=false,englishLetter,englishAddLetter,secondLanguage=false,russianLetter,russianAddLetter,){
      button.special =  special;
      button.languages.english = new Language(englishLetter,englishAddLetter);
      if (secondLanguage){
         button.languages.russian = new Language(russianLetter,russianAddLetter);
      }
   },
   
}