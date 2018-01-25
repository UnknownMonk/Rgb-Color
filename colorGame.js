var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function(){
	// generate all new collors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change color display to mach picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i]
	}
	h1.style.backgroundColor = "steelblue";


});
colorDisplay.textContent = pickedColor;




for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent ="Try Again";
		}
	});


}

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	// change each color to match given color
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	// make an array
	var arr = []
	// add num random colors to array
	for(var i = 0; i < num; i++)
		// Get random color and push into array
	arr.push(randomColor());
	// return that array
	return arr;
}
function randomColor(){
	// pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	// pick a blue form 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

