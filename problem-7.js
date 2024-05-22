var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function dupliDetector(number, index, array) {
    return array.indexOf(number) !== index;
}

const duplicates = numbers.filter(dupliDetector);
console.log(duplicates);
