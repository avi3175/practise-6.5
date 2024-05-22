var numbers = [1, 20, 3, 45, 12, 8, 30, 5, 17];

let maxN = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxN) {
        maxN = numbers[i];
    }
}

console.log(maxN);
