let year = 2001;
if (year % 4 === 0) {
   
    if (year % 100 === 0 && year % 400 !== 0) {
        console.log("This is NOT a Leap year");
    } else {
        console.log("This is a Leap year!!!");
    }
} else {
    console.log("This is NOT a Leap year");
}
