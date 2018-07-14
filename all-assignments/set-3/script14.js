let customercash = 10000;
let withdrawcash = 500 ;

if (withdrawcash > customercash) {
	console.log("Withdrawal failed");
} else {
	console.log("Withdrawal, success! your new balance is" +" "+ (customercash - withdrawcash));
}