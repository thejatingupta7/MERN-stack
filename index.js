// Add a Number: addNumber
function addNumber(array, number) {
    array.push(number);
}

// Remove a Number: removeNumber
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// Sort the Numbers: sortNumbers
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Calculate Sum: calculateSum
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Calculate Average: calculateAverage
function calculateAverage(array) {
    return calculateSum(array) / array.length;
}
let numbers = [5, 3, 8, 1, 2];

console.log("Initial array:", numbers);

// Demonstrate adding a number
addNumber(numbers, 4);
console.log("After adding 4:", numbers);

// Demonstrate removing a number
removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

// Demonstrate sorting the numbers
const sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

// Demonstrate calculating sum
const sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

// Demonstrate calculating average
const average = calculateAverage(numbers);
console.log("Average of numbers:", average);
