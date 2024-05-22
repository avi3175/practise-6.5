function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

const userInput = prompt("Enter a year:");
const year = parseInt(userInput);

if (!isNaN(year)) {
    if (isLeapYear(year)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
} else {
    console.log("Invalid input!");
}
