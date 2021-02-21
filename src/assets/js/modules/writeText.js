export const writeTextWDelay = (elem, speed = 50, timer) => {

  return () => {

    let str = elem.textContent;
    let oldStr = str;

    // checking if timer already working,clear timer and set old string value to
    // string
    if (timer) {
      clearTimeout(timer);
      str = oldStr;
    }

    //init a counter and reset string value of element
    let c = 0;
    if(elem.innerHTML.length < oldStr.length) elem.innerHTML = '';

    //self-calling recursive function
    (function writeTextCaller() {

      if (c < oldStr.length) {
        elem.innerHTML += oldStr[c];
        console.log(elem.innerHTML, c)
        timer = setTimeout(writeTextCaller, speed);
        c += 1;
      }
    })();
  }

};