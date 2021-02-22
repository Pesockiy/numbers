import {
	writingText
} from '../modules/towrite'
import {
	writeTextWDelay
} from '../modules/writeText'

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

	reducer = (sum, i) => sum + i;

let oldItem = document.querySelector('.active');




let buttonDate = document.querySelector('#write-date'),
	buttonName = document.querySelector('#write-name');

// buttonDate.addEventListener('click', writeTextWDelay(buttonDate));
// buttonName.addEventListener('click', writeTextWDelay(buttonName));

let g = new writeTextWDelay(buttonDate,buttonDate.getAttribute('data-name'),50);
let h = new writeTextWDelay(buttonName,buttonName.getAttribute('data-name'),50);

g.click();
h.click();



let x = 1;

arrayOfAlphabet.forEach(current => {

	objectToCompare[current] = x;
	if (x === 9) x = 0;
	x++;

});

const isEng = text => {

	return /[а-я]/i.test(text);

};

const countingNum = (element, writingField) => {

	if (element.length > 0) {

		const sumUp = () => {

			element = element
				.reduce(reducer)
				.toString()
				.split('');

			element = element.map(item => +item);
			if (element.length > 1) return sumUp();
		};

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

	if (!newArrFromInput.length > 0) return;

	if (!isEng(newArrFromInput)) {
		outputName.innerText = 'Введите на русском!';
	};

	newArrFromInput.forEach(current => {
		sum += objectToCompare[current];
	});

	let sumUpVal = sum.split('');

	countingNum(sumUpVal, outputName);

};

const numOfSoul = () => {
	if (!inputDate.value.length > 0) return;
	countingNum(inputDate.value.split("-"), outputDate);

};