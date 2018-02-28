var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

colorDisplay.textContent=pickedColor;

init();

function init(){

	//Mode button event listeners.
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i=0; i<squares.length;i++){
	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
	//grab color of qicked square
	var clickedColor=this.style.backgroundColor;
	//Compare chosen color to the correct color
	if(clickedColor===pickedColor){
		messageDisplay.textContent="Correct!";
		resetButton.textContent="Play again?"
		changeColors(clickedColor);
		h1.style.backgroundColor=clickedColor;
	}
	else{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="Try again";
	}
	});
}
}

function setupModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
				if(this.textContent==="Easy"){
					numSquares=3;
				}
				else{
					numSquares=6;
				}
			reset();
		});
	}
}

function reset(){
	//Generate all new colors
	colors=generateRandomColors(numSquares);

	//Pick a new random color from the array.
	pickedColor=pickColor();

	//Change colorDisplay to match pickedColor
	colorDisplay.textContent=pickedColor;

	resetButton.textContent="New color";

	//Change the colors of the squares.
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	};
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
}

resetButton.addEventListener("click", function(){
	reset();
});

for(var i=0; i<squares.length;i++){
	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
	//grab color of qicked square
	var clickedColor=this.style.backgroundColor;
	//Compare chosen color to the correct color
	if(clickedColor===pickedColor){
		messageDisplay.textContent="Correct!";
		resetButton.textContent="Play again?"
		changeColors(clickedColor);
		h1.style.backgroundColor=clickedColor;
	}
	else{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="Try again";
	}
	});
}

function changeColors(color){
	//Loop through all the squares
	for (var i=0; i<squares.length; i++){
	//Change each color to match the chosen color.
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return (colors[random]);
}

function generateRandomColors(num){
	//Make an array
	var array=[];
	//Repeat num times
	for(var i=0; i<num; i++){
	//Get random numbers and push them into array.
	array.push(randomColor());
	}
	//return that array
	return(array);
}

function randomColor(){
	//Pick a "red" from 0-255.
	var r=Math.floor(Math.random()*256);
	//Pick a "green" from 0-255.
	var g=Math.floor(Math.random()*256);
	//Pick a "blue" from 0-255.
	var b=Math.floor(Math.random()*256);
	return ("rgb(" + r + ", " + g + ", " + b +")");
}