const arrayOfAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split(''),
      objectToCompare = {},
			
      inputName = document.querySelector('#name'),
      outputName = document.querySelector('#labelForName'),
			inputDate = document.querySelector('#date'),
      outputDate = document.querySelector('#labelForDate'),
			setName = document.querySelectorAll('.num-form__btn')[0],
			setSoul = document.querySelectorAll('.num-form__btn')[1],
			textName = document.querySelector('.num-form__label--left'),
			textSoul = document.querySelector('.num-form__label--right'),
			
			reducer = (sum,i) => sum + i;

let flag = true,
		oldItem = document.querySelector('.active'),
		timer;

const writingText = (item) => {
  return function() {

    let  itemVal = item.getAttribute('data-name'),
        counter = 0;

    if(item.classList.contains('active')) return;
    
    if(oldItem.classList.contains('active')) {
			oldItem.classList.remove('active');
		};
    
    item.classList.add('active');
    item.textContent = '';
    if (timer) {
      clearTimeout(timer);
      oldItem.textContent = oldItem.getAttribute('data-name');
    }
    
      (function() {

        if(counter < itemVal.length) {
        
            item.textContent += itemVal[counter];
            counter++;
            timer = setTimeout(arguments.callee, 50);
        
        };
      })();
      oldItem = item;
  };
};

	textSoul.addEventListener('click', writingText(textSoul));
	textName.addEventListener('click', writingText(textName));


let x = 1;
arrayOfAlphabet.forEach((current) => {
    objectToCompare[current] = x;
    if(x === 9) x = 0;
    x++;
});

const isEng = text => {
    return /[а-я]/i.test(text);
};

const countingNum = (element,writingField) => {
	
	 if(element.length > 0) {
        
        const sumUp = () => {
					
            element = element
							.reduce(reducer)
							.toString()
							.split('');
					
            element = element.map(item => +item);
            if(element.length > 1) return sumUp();
        };
        
        console.log(element);
		 
        sumUp();
    };
	
	writingField.innerText = element;
	
};


//
const numOfName = () => {

    let newArrFromInput = inputName
            .value
            .toLowerCase()
            .replace(/\s+/g, '')
            .split(''),
        sum = '';
	
	if(!newArrFromInput.length > 0) return;

	if(!isEng(newArrFromInput)) {
		outputName.innerText = 'Введите на русском!';
	};
	
  newArrFromInput.forEach((current) => {
     sum += objectToCompare[current];
  });

    let sumUpVal = sum.split('');
	
		countingNum(sumUpVal,outputName);
    
};

const numOfSoul = () => {
	if(!inputDate.value.length > 0) return;
	countingNum(inputDate.value.split("-"),outputDate);
	
}; 

setName.addEventListener('click',numOfName);
setSoul.addEventListener('click',numOfSoul);

