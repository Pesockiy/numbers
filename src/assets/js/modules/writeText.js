// export const writeTextWDelay = (elem, speed = 50, timer) => {

//   return () => {

//     let dataText = elem.getAttribute('data-name');

//     // checking if timer already working,clear timer for rigth writing text
//     if (timer) {
//       clearTimeout(timer);
//       elem.innerHTML = dataText;
//     }

//     //init a counter and reset string value of element
//     let c = 0;
//     elem.innerHTML = '';

//     //self-calling recursive function
//     (function writeTextCaller() {

//       if (c < dataText.length) {
//         elem.innerHTML += dataText[c];
//         timer = setTimeout(writeTextCaller, speed);
//         c += 1;
//       }
//     })();
//   }
// };

export class writeTextWDelay {

  constructor(elem, text, speed) {

    this.elem = elem;
    this.text = text;
    this.speed = speed;

  }

  click() {

    let timer;

    this.elem.addEventListener('click', () => {
    let t = this,
        c = 0;

      if (timer) {
        clearTimeout(timer);
        this.elem.innerHTML = this.text;
      }

      this.elem.innerHTML = '';

      (function writeTextCaller() {
        if (c < t.text.length) {
          t.elem.innerHTML += t.text[c];
          timer = setTimeout(writeTextCaller, t.speed);
          c += 1;
        }
      })();
      
    })
  }


};