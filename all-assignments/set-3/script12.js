const applecost = 10;
const bananacost = 8;
const mangocost = 15;
const alicash = 100;
let totalcost;
let noOfApples = 2;
let noOfBananas = 4;
let noOfMangoes = 3;

totalcost = noOfApples*applecost + noOfBananas*bananacost + noOfMangoes*mangocost;

if (totalcost >100) {
	console.log("Sorry not enough money to buy fruits :(");
} else {
	console.log("You have enough money to buy fruits :)");
}