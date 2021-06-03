// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

// If no three numbers sum up to the target sum, the funciton should return an empty array.

// Sample Input:
// array = [12, 3, 1, 2, -6, 5, -8, 6];
// targetSum = 0;

// Sample Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]];

// I: Non-empty array of distinct integers; an integer (target sum)
// O: Array of triplets that sum up to target sum (ascending order)

// Notes:
// Sort array
// Use left and right pointer
// Iterate array (once)
// Set left pointer
// Set right pointer
// Keep track of current sum
  // Current sum = current number + left + right
// Since in sorted order... we can compare to target sum to know where to move our pointers - move one pointer at a time
  // Move left pointer - check current sum against target sum
  // Move right pointer - check current sum against target sum again
  // Once found current sum = target sum - can move both... because if we move just one, for sure won't match target sum anyways
// Next iteration --> don't revisit that first number... keep going --> reset left and right pointers
// Time = 0(N^2)
// Space = O(N)

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => (a - b));
  let result = [];
  let currentSum;
  // Only go to length - 2... because we always need triplets
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      currentSum = array[i] + array[leftPointer] + array[rightPointer];
      if (currentSum === targetSum) {
        result.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer ++;
        rightPointer --;
      } else if (currentSum < targetSum) {
        leftPointer ++;
      } else if (currentSum > targetSum) {
        rightPointer --;
      }
    }
  }
  return result;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

// Tests
let arrayOne = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSumOne = 0;
console.log('Test 1: ', threeNumberSum(arrayOne, targetSumOne));

let arrayTwo = [1, 2, 3];
let targetSumTwo = 6;
console.log('Test 2: ', threeNumberSum(arrayTwo, targetSumTwo));

let arrayThree = [1, 2, 3];
let targetSumThree = 7;
console.log('Test 3: ', threeNumberSum(arrayThree, targetSumThree));

let arrayFour = [8, 10, -2, 49, 14];
let targetSumFour = 57;
console.log('Test 4: ', threeNumberSum(arrayFour, targetSumFour));

let arrayFive = [12, 3, 1, 2, -6, 5, 0, -8, -1];
let targetSumFive = 0;
console.log('Test 5: ', threeNumberSum(arrayFive, targetSumFive));

let arraySix = [12, 3, 1, 2, -6, 5, 0, -8, -1, 6];
let targetSumSix = 0;
console.log('Test 6: ', threeNumberSum(arraySix, targetSumSix));

let arraySeven = [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5];
let targetSumSeven = 0;
console.log('Test 7: ', threeNumberSum(arraySeven, targetSumSeven));

let arrayEight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
let targetSumEight = 18;
console.log('Test 8: ', threeNumberSum(arrayEight, targetSumEight));

let arrayNine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
let targetSumNine = 32;
console.log('Test 9: ', threeNumberSum(arrayNine, targetSumNine));

let arrayTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
let targetSumTen =33;
console.log('Test 10: ', threeNumberSum(arrayTen, targetSumTen));

let arrayEleven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
let targetSumEleven = 5;
console.log('Test 11: ', threeNumberSum(arrayEleven, targetSumEleven));
