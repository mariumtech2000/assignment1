function prints(){
	let printer =parseInt(document.querySelector("#num").value);
	let printers =parseInt(document.querySelector("#numb").value);


	for (let numb=printer; numb<=printers; numb++) {
		let bodyEl = document.querySelector("body");
		bodyEl.innerHTML = bodyEl.innerHTML + "<p>" + numb + "</p>"
	}
}



// function prints() {
// 	for (let numb=1; numb<=100; numb++) {
// 		let bodyEl = document.querySelector("body");
// 	bodyEl.innerHTML = bodyEl.innerHTML + "<p>" + numb + "</p>"

// }
	
// }

// for (let numb=1; numb<=100; numb++){
// 	console.log(numb);
// }











