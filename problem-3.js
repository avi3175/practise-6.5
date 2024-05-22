let array = [15, 3, 8, 11, 5, 18, 7, 20, 1, 6, 12, 2, 14, 17, 10, 19, 9, 16, 4, 13];

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array);
