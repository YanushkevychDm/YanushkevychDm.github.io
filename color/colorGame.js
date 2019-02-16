let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messgeDisplay = document.getElementById('message');
const h1 = document.querySelector('.h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setUpModeButtons(); 
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) { 
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6; 
			reset();
		}); 
	}
}

function setUpSquares() {
	for(let i = 0; i < squares.length; i++){
		// add click listeners
		squares[i].addEventListener('click', function(){
			// grab color of clicked square
			let clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor) {
				messgeDisplay.textContent = 'Correct!';
				changeColors(clickedColor);
				resetButton.textContent = 'Play again?';
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messgeDisplay.textContent = 'Try again';
			}
		});
	} 
}

function reset() {
	// generate new colors;  
	colors = generateRandomColors(numSquares);
	// pick a new random color 
	pickedColor = pickColor();
	// change colors of square and colorDisplay
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New colors';
	messgeDisplay.textContent = '';
	for(let i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
		// add new colors to squares
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function() {
	reset();
});

for(let i = 0; i < squares.length; i++){
	// add click listeners
	squares[i].addEventListener('click', function(){
		// grab color of clicked square
	  let clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor === pickedColor) {
			messgeDisplay.textContent = 'Correct!';
			changeColors(clickedColor);
			resetButton.textContent = 'Play again?';
			h1.style.backgroundColor = pickedColor;
		} else {
			this.style.backgroundColor = '#232323';
			messgeDisplay.textContent = 'Try again';
		}
	});
} 

function changeColors(color) {
	for(let i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
} 

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	let arr = [];
	for(let i = 0; i < num; i++) arr.push(randomColor());
	return arr;
}

function randomColor() {
	const r =  Math.floor(Math.random() * 256);
	const g =  Math.floor(Math.random() * 256);
	const b =  Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}