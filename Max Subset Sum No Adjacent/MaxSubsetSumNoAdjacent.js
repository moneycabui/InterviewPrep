// Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.

// If the input array is empty, the function should return 0.

// Sample Input:
// array = [75, 105, 120, 75, 90, 135];
// Sample Output:
// 330 (75 + 120 + 135)

// I: Array of positive integers
// O: Maximum sum of non-adjacent elements in array
// E: If empty array, return 0 and if array length is 1, return array at 0

function maxSubsetSumNoAdjacent(array) {
  // Handle edge cases - when length is 0 or 1
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }

  // Store max sum in max sum array comparing 2 diff adjacent possibilities - start with making a copy of current array then re-assigning with max sums
  const maxSumsArray = array.slice();
  // Need to start i at 2 otherwise i - 2 will be undefined
  maxSumsArray[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSumsArray[i] = Math.max(maxSumsArray[i - 1], maxSumsArray[i - 2] + array[i]);
  }

  // Return last element
  return maxSumsArray[maxSumsArray.length - 1];
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

// Tests
let arrayOne = [75, 105, 120, 75, 90, 135]; // 330
console.log('Test 1: ', maxSubsetSumNoAdjacent(arrayOne));

let arrayTwo = []; // 0
console.log('Test 2: ', maxSubsetSumNoAdjacent(arrayTwo));

let arrayThree = [1]; // 1
console.log('Test 3: ', maxSubsetSumNoAdjacent(arrayThree));

let arrayFour = [1, 2]; // 2
console.log('Test 4: ', maxSubsetSumNoAdjacent(arrayFour));

let arrayFive = [1, 2, 3]; // 4
console.log('Test 5: ', maxSubsetSumNoAdjacent(arrayFive));

let arraySix = [1, 15, 3]; // 15
console.log('Test 6: ', maxSubsetSumNoAdjacent(arraySix));

let arraySeven = [7, 10, 12, 7, 9, 14]; // 33
console.log('Test 7: ', maxSubsetSumNoAdjacent(arraySeven));

let arrayEight = [4, 3, 5, 200, 5, 3]; // 207
console.log('Test 8: ', maxSubsetSumNoAdjacent(arrayEight));

let arrayNine = [10, 5, 20, 25, 15, 5, 5, 15]; // 60
console.log('Test 9: ', maxSubsetSumNoAdjacent(arrayNine));

let arrayTen = [10, 5, 20, 25, 15, 5, 5, 15, 3, 15, 5, 5, 15]; // 90
console.log('Test 10: ', maxSubsetSumNoAdjacent(arrayTen));