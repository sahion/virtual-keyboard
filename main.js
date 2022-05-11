(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}var n=t((function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mainLetter=t,n&&(this.additionalLetter=n)}));function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var l=r((function e(t,a,r,l,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var s=this;this.languages={},s.special=r,s.languages.english=new n(t,a),l&&(s.languages.russian=new n(l,i))}));function i(e,t,n){return i=s()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var r=new(Function.bind.apply(e,a));return n&&o(r,n.prototype),r},i.apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var f=d((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;this.createNewButton=function(e,n){var a;t[e]=i(l,function(e){if(Array.isArray(e))return c(e)}(a=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}}));function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return l}}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var b=new f,h=document.createElement("div");h.classList.add("container");var y=document.createElement("textarea");y.classList.add("textarea"),y.readOnly=!0;var m=document.createElement("h2");m.innerText="Created on Windows system\nChange language on ctrl+shift combination";var v=document.createElement("div");v.classList.add("keyboard"),document.body.appendChild(h),h.appendChild(y),h.appendChild(m),h.appendChild(v);var x=["english","russian"],C="english",T=!1,k=!1;function w(e,t,n,a,r){var l=document.createElement("div"),i=e,s="";if(e.toUpperCase()===e||n)if(e&&"1234567890".includes(e))s="Digit".concat(e);else if(n)switch(e){case"Del":s="Delete";break;case"ShiftL":s="ShiftLeft",i=e.slice(0,-1);break;case"ShiftR":s="ShiftRight",i=e.slice(0,-1);break;case"CtrlL":s="ControlLeft",i=e.slice(0,-1);break;case"CtrlR":s="ControlRight",i=e.slice(0,-1);break;case"AltR":s="AltRight",i=e.slice(0,-1);break;case"AltL":s="AltLeft",i=e.slice(0,-1);break;case"Win":s="Meta";break;default:s=i}else switch(i){case"`":s="Backquote";break;case"-":s="Minus";break;case"=":s="Equal";break;case"[":s="BracketLeft";break;case"]":s="BracketRight";break;case"\\":s="Backslash";break;case";":s="Semicolon";break;case"'":s="Quote";break;case",":s="Comma";break;case".":s="Period";break;case"/":s="Slash";break;case"↑":s="ArrowUp";break;case"←":s="ArrowLeft";break;case"↓":s="ArrowDown";break;case"→":s="ArrowRight";break;case"":s="Space";break;default:s=i}else s="Key".concat(e.toUpperCase());if(l.classList.add("keyboard__button","button",s),l.innerText=i,t){var o=document.createElement("div");o.classList.add("button__additional-letter"),o.innerText=t,l.appendChild(o)}b.createNewButton(s,[e,t,n,a,r]),v.appendChild(l)}function S(e){if(v.querySelector(".".concat([e.code])).classList.remove("button_pressed"),"Shift"===e.key){var t=document.querySelectorAll(".button");T=!1,t.forEach((function(e){if(1===e.innerText.length&&e.innerText!==e.innerText.toLowerCase())e.innerText=e.innerText.toLowerCase();else if(1===e.innerText.length&&e.innerText!==e.innerText.toUpperCase())e.innerText=e.innerText.toUpperCase();else if(b[e.classList[2]].languages.english&&b[e.classList[2]].languages.english.additionalLetter){e.innerText=b[e.classList[2]].languages[C]&&b[e.classList[2]].languages[C].mainLetter?b[e.classList[2]].languages[C].mainLetter:b[e.classList[2]].languages.english.mainLetter;var t=document.createElement("div");t.classList.add("button__additional-letter"),t.innerText=b[e.classList[2]].languages[C]&&b[e.classList[2]].languages[C].additionalLetter?b[e.classList[2]].languages[C].additionalLetter:b[e.classList[2]].languages.english.additionalLetter,e.appendChild(t)}}))}else"Control"===e.key&&(k=!1)}function A(e){var t=!1;if("keydown"===e.type)t=e.code;else if("click"===e.type&&("button"!==e.target.classList[1]&&"button"!==e.target.parentElement.classList[1]||("button"===e.target.classList[1]?t=p(e.target.classList,3)[2]:"button"===e.target.parentElement.classList[1]&&(t=p(e.target.parentElement.classList,3)[2])),!t))return"not that type";if("Delete"!==t&&e.preventDefault(),e.repeat&&b[t].special&&"Backspace"!==b[t].languages.english.mainLetter&&"Enter"!==b[t].languages.english.mainLetter)return"sameBtn";var n,a,r=v.querySelector(".".concat([t]));return"keydown"===e.type&&(r.classList.add("button_pressed"),document.addEventListener("keyup",S)),("Shift"===t.slice(0,5)&&k||"Control"===t.slice(0,7)&&T)&&(C=x[x.indexOf(C)+1]?x[x.indexOf(C)+1]:x[0],n=document.querySelectorAll(".button"),a=n[15].innerText[0]===n[15].innerText[0].toUpperCase(),n.forEach((function(e){if(!b[e.classList[2]].languages[C]||b[e.classList[2]].special)return"not changed";if(e.innerText=a?b[e.classList[2]].languages[C].mainLetter.toUpperCase():b[e.classList[2]].languages[C].mainLetter.toLowerCase(),!b[e.classList[2]].languages.english.additionalLetter||b[e.classList[2]].languages[C]&&b[e.classList[2]].languages[C].mainLetter.toUpperCase()!==b[e.classList[2]].languages[C].mainLetter)return"additional not changed";var t=document.createElement("div");return t.classList.add("button__additional-letter"),t.innerText=b[e.classList[2]].languages[C]&&b[e.classList[2]].languages[C].additionalLetter?b[e.classList[2]].languages[C].additionalLetter:b[e.classList[2]].languages.english.additionalLetter,e.appendChild(t),"success"}))),"Shift"===t.slice(0,5)?((T=!T)?r.classList.add("button_pressed"):r.classList.remove("button_pressed"),document.querySelectorAll(".button").forEach((function(e){if(1===e.innerText.length&&e.innerText!==e.innerText.toUpperCase())e.innerText=e.innerText.toUpperCase();else if(1===e.innerText.length&&e.innerText!==e.innerText.toLowerCase())e.innerText=e.innerText.toLowerCase();else if(!b[e.classList[2]].special&&b[e.classList[2]].languages.english&&b[e.classList[2]].languages.english.additionalLetter){e.innerText=b[e.classList[2]].languages[C]&&b[e.classList[2]].languages[C].additionalLetter?b[e.classList[2]].languages[C].additionalLetter:b[e.classList[2]].languages.english.additionalLetter;var t=document.createElement("div");t.classList.add("button__additional-letter"),t.innerText=b[e.classList[2]].languages[C]&&b[e.classList[2]].languages[C].mainLetter?b[e.classList[2]].languages[C].mainLetter:b[e.classList[2]].languages.english.mainLetter,e.appendChild(t)}}))):"Control"===t.slice(0,7)?(k=!k)?r.classList.add("button_pressed"):r.classList.remove("button_pressed"):"CapsLock"===t?document.querySelectorAll(".button").forEach((function(e){1===e.innerText.length&&e.innerText!==e.innerText.toLowerCase()?e.innerText=e.innerText.toLowerCase():1===e.innerText.length&&e.innerText!==e.innerText.toUpperCase()&&(e.innerText=e.innerText.toUpperCase())})):"Space"===t?y.textContent+=" ":"Backspace"===t?y.textContent=y.textContent.slice(0,-1):"Enter"===t?y.textContent+="\n":"Tab"===t?y.textContent+="    ":b[t].special||(y.textContent+=r.innerText.slice(0,1)),"success"}[["`","~",!1,"ё"],["1","!",!1],["2",'"',!1,"2","@"],["3","#",!1,"3","№"],["4","$",!1,"4",";"],["5","%",!1,"5","%"],["6","^",!1,"6",":"],["7","&",!1,"7","?"],["8","*",!1,"8","*"],["9","("],["0",")"],["-","_"],["=","+"],["Backspace",null,!0],["Tab",null,!0],["q",null,!1,"й"],["w",null,!1,"ц"],["e",null,!1,"у"],["r",null,!1,"к"],["t",null,!1,"е"],["y",null,!1,"н"],["u",null,!1,"г"],["i",null,!1,"ш"],["o",null,!1,"щ"],["p",null,!1,"з"],["[","{",!1,"х"],["]","}",!1,"ъ"],["\\","|",!1,"\\","/"],["Del",null,!0],["CapsLock",null,!0],["a",null,!1,"ф"],["s",null,!1,"ы"],["d",null,!1,"в"],["f",null,!1,"а"],["g",null,!1,"п"],["h",null,!1,"р"],["j",null,!1,"о"],["k",null,!1,"л"],["l",null,!1,"д"],[";",":",!1,"ж"],["'",'"',!1,"э"],["Enter",null,!0],["ShiftL",null,!0],["z",null,!1,"я"],["x",null,!1,"ч"],["c",null,!1,"с"],["v",null,!1,"м"],["b",null,!1,"и"],["n",null,!1,"т"],["m",null,!1,"ь"],[",","<",!1,"б"],[".",">",!1,"ю"],["/",":",!1,".",","],["↑"],["ShiftR",null,!0],["CtrlL",null,!0],["Win",null,!0],["AltL",null,!0],[""],["AltR",null,!0],["CtrlR",null,!0],["←"],["↓"],["→"]].forEach((function(e){return w.apply(void 0,function(e){if(Array.isArray(e))return L(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||g(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var t})),document.addEventListener("keydown",A),document.addEventListener("click",A)})();