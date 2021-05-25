// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

// Sample Input:
// array = [1, 2, 3, 5, 6, 8, 9];
// Sample Output:
// [1, 4, 9, 25, 36, 64, 81];

// I: Sorted non-empty array of integers (ascending order)
// O: new array of same length with squares of original integers - ascending order

function sortedSquaredArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] ** 2);
  }
  return result.sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

// Tests

let arrayOne = [1, 2, 3, 5, 6, 8, 9];
console.log(sortedSquaredArray(arrayOne));

let arrayTwo = [1];
console.log(sortedSquaredArray(arrayTwo));

let arrayThree = [-10, -5, 0, 5, 10];
console.log(sortedSquaredArray(arrayThree));