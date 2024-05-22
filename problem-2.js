function checkTheNumber(input) {
    const number = isNaN(input) ? parseInt(input) : input;

    if (typeof number === 'number' && !isNaN(number)) {
        if (number % 2 === 0) {
            console.log(`${number} is an even number.`);
        } else {
            console.log(`${number} is an odd number.`);
        }
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}

const userInput = prompt("Enter a number:");
checkTheNumber(userInput);
