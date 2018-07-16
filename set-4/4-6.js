let maths;
let english;
let computer;


function calculate() {
	maths = parseInt(document.querySelector("#first").value);
	english = parseInt(document.querySelector("#second").value);
	computer = parseInt(document.querySelector("#third").value);


	if (maths < 20 || english < 10 || computer < 50){
		console.log("You not Pass the Techkaro Addmission Test");
	}else{
		console.log("You Pass Techkaro Addmission Test");
	}
}