// Write a funciton that takes in two non-empty arrays of integers, finds the pair of numbers (one form each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

// Sample Input:
// arrayOne = [-1, 5, 10, 20, 28, 3];
// arrayTwo = [26, 134, 135, 15, 17];

// Sample Output:
// [28, 26];

// I: Two arrays of integers
// O: One array with the pair of numbers (one from each array) with the smallest difference - First array in first position, second array in 2nd position
// E: Account for negative number differences

function smallestDifference(arrayOne, arrayTwo) {
  let difference = Math.abs(arrayOne[0] - arrayTwo[0]);
  let arrayOneInteger = arrayOne[0];
  let arrayTwoInteger = arrayTwo[0];
  // Iterate through first array
  for (let i = 0; i < arrayOne.length; i++) {
    // Compare to each number in 2nd array
    for (let j = 0; j < arrayTwo.length; j++) {
      // Find the absolute value of the difference between two numbers
      // If smaller than current stored difference, replace
      let currentDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (currentDifference < difference) {
        difference = currentDifference;
        arrayOneInteger = arrayOne[i];
        arrayTwoInteger = arrayTwo[j];
      }
    }
  }
  return [arrayOneInteger, arrayTwoInteger];
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

// Tests
let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 17];
console.log('Sample: ', smallestDifference(arrayOne, arrayTwo)); // [28, 26]

let arrayOneA = [-1, 5, 10, 20, 28, 3];
let arrayTwoA = [26, 134, 135, 15, 17];
console.log('Test A: ', smallestDifference(arrayOneA, arrayTwoA)); // [28, 26]

let arrayOneB = [-1, 5, 10, 20, 3];
let arrayTwoB = [26, 134, 135, 15, 17];
console.log('Test B: ', smallestDifference(arrayOneB, arrayTwoB)); // [20, 17]

let arrayOneC = [10, 0, 20, 25];
let arrayTwoC = [1005, 1006, 1014, 1032, 1031];
console.log('Test C: ', smallestDifference(arrayOneC, arrayTwoC)); // [25, 1005]

let arrayOneD = [10, 0, 20, 25, 2200];
let arrayTwoD = [1005, 1006, 1014, 1032, 1031];
console.log('Test D: ', smallestDifference(arrayOneD, arrayTwoD)); // [25, 1005]

let arrayOneE = [10, 0, 20, 25, 2000];
let arrayTwoE = [1005, 1006, 1014, 1032, 1031];
console.log('Test E: ', smallestDifference(arrayOneE, arrayTwoE)); // [2000, 1032]

let arrayOneF = [240, 124, 86, 111, 2, 84, 954, 27, 89];
let arrayTwoF = [1, 3, 954, 19, 8];
console.log('Test F: ', smallestDifference(arrayOneF, arrayTwoF)); // [954, 954]

let arrayOneG = [0, 20];
let arrayTwoG = [21, -2];
console.log('Test G: ', smallestDifference(arrayOneG, arrayTwoG)); // [20, 21]

let arrayOneH = [10, 1000];
let arrayTwoH = [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530];
console.log('Test H: ', smallestDifference(arrayOneH, arrayTwoH)); // [1000, 1014]

let arrayOneI = [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123];
let arrayTwoI = [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530];
console.log('Test I: ', smallestDifference(arrayOneI, arrayTwoI)); // [-123, -124]

let arrayOneJ = [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530];
let arrayTwoJ = [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530];
console.log('Test J: ', smallestDifference(arrayOneJ, arrayTwoJ)); // [530, 530]
