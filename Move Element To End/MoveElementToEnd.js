// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

// The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

// Sample Input:
// array: [2, 1, 2, 2, 2, 3, 4, 2]
// toMove: 2

// Sample Output:
// [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently

// I: Array of integers and an integer (toMove)
// O: New array with all instances of that integer moved to the end of the array

function moveElementToEnd(array, toMove) {
  let endOfArray = [];
  // Iterate array
  for (let i = 0; i < array.length; i++) {
    // Check if value of array at index is equal to toMove
    if (array[i] === toMove) {
      // If equal, move to the end
      endOfArray.push(array[i]);
      array.splice(i, 1);
      // Will need to go back one index to account for deleted item
			i--;
    }
  }
  return array.concat(endOfArray);
}



// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

// Tests
let arrayOne = [2, 1, 2, 2, 2, 3, 4, 2];
let toMoveOne = 2;
console.log('Test 1: ', moveElementToEnd(arrayOne, toMoveOne)); // [4, 1, 3, 2, 2, 2, 2, 2]

let arrayTwo = [];
let toMoveTwo = 3;
console.log('Test 2: ', moveElementToEnd(arrayTwo, toMoveTwo)); // []

let arrayThree = [1, 2, 4, 5, 6];
let toMoveThree = 3;
console.log('Test 3: ', moveElementToEnd(arrayThree, toMoveThree)); // [1, 2, 4, 5, 6]

let arrayFour = [3, 3, 3, 3, 3];
let toMoveFour = 3;
console.log('Test 4: ', moveElementToEnd(arrayFour, toMoveFour)); // [3, 3, 3, 3, 3]

let arrayFive = [3, 1, 2, 4, 5];
let toMoveFive = 3;
console.log('Test 5: ', moveElementToEnd(arrayFive, toMoveFive)); // [5, 1, 2, 4, 3] or [1, 2, 4, 5, 3]

let arraySix = [1, 2, 4, 5, 3];
let toMoveSix = 3;
console.log('Test 6: ', moveElementToEnd(arraySix, toMoveSix)); // [1, 2, 4, 5, 3]

let arraySeven = [1, 2, 3, 4, 5];
let toMoveSeven = 3;
console.log('Test 7: ', moveElementToEnd(arraySeven, toMoveSeven)); // [1, 2, 5, 4, 3]

let arrayEight = [2, 4, 2, 5, 6, 2, 2];
let toMoveEight = 2;
console.log('Test 8: ', moveElementToEnd(arrayEight, toMoveEight)); // [6, 4, 5, 2, 2, 2, 2]

let arrayNine = [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
let toMoveNine = 5;
console.log('Test 9: ', moveElementToEnd(arrayNine, toMoveNine)); // [12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 6, 5, 5, 5, 5, 5, 5]

let arrayTen = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5];
let toMoveTen = 5;
console.log('Test 10: ', moveElementToEnd(arrayTen, toMoveTen)); // [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]

let arrayEleven = [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12];
let toMoveEleven = 5;
console.log('Test 11: ', moveElementToEnd(arrayEleven, toMoveEleven)); // [12, 1, 2, 11, 10, 3, 4, 6, 7, 9, 8, 5, 5, 5, 5, 5, 5]