// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// I: non-empty array and target sum
// O: array of numbers that sum up to target sum or empty array

function twoNumberSum(array, targetSum) {
  // Write your code here.
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && ((array[i] + array[j]) === targetSum)) {
        result.push(array[i]);
      }
    }
  }

  // Optimized solution:
  // For each of the numbers
    // Convert to object - stringify to key
    // Look up target sum - number
    // Push numbers to result array

  return result;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

// Test Case 1
const array1 = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum1 = 10;
const test1 = twoNumberSum(array1, targetSum1); // [11, -1]

console.log(test1);

// Experimentation:

// Working solution:
// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j && ((array[i] + array[j]) === targetSum)) {
//         result.push(array[i]);
//       }
//     }
//   }

//   return result;
// }

// Version 2:
// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if ((array[i] + array[j]) === targetSum) {
//         result.push(array[i]);
//       }
//     }
//   }

//   return result;
// }
