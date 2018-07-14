const costPerMinute = 1; 
let userCash = 20; 

if (userCash < costPerMinute) {
    console.log("Moazziz Sarif, aap ka mojooda balance kam hai. Please re-charge karain");
} else if (userCash <= 10) {
    console.log("Moazziz sarif, aap ka balance khatam honay wala hai");
    console.log("Ring Ring!!!");
} else {
    console.log("Ring Ring!!!");
}