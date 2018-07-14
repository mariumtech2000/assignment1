function calculateCube(){
	let inputValue = document.querySelector("input").value;
	let cube = inputValue * inputValue * inputValue;
	alert ("The Cube of" + inputValue + "is" + cube);
}