let expectedNumbers = [];

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        expectedNumbers.push(i);
    }
}

console.log(expectedNumbers);
