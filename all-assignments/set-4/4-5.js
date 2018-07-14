let myMarks;
let totalMArks = 1050;
function calculate(){
	let myMarks = parseInt(document.querySelector("input").value);
	let percentage = myMarks / totalMArks * 100;
	alert(percentage);
}