const appleCost =10;
const bananaCost =15;
const mangoCost =8;

function calculateAdd(){
	let totalCost;
	let noOfApple = parseInt(document.querySelector ("#numb1").value);
	let noOfBanana = parseInt(document.querySelector ("#numb2").value);
	let noOfMango = parseInt(document.querySelector ("#numb3").value);
	totalCost = noOfApple * appleCost + noOfBanana * bananaCost + noOfMango * mangoCost;
	alert("the sum of" + noOfApple + " " + noOfBanana + " " + noOfMango + "is" + totalCost);
}