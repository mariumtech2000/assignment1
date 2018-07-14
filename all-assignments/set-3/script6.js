let highScore = 70;
let myScore = 50;

if (highScore < myScore) {
	console.log("congratulation");
} else {
	console.log("Try Again you need " + (highScore - myScore + 1) +" "+ "points to win");
}