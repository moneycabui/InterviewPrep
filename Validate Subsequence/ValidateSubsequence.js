// Given two non-empty arrays of integers, write a funciton that determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

// I: array of numbers and sequence
// O: Boolean - whether or not sequence is part of array of numbers

function isValidSubsequence(array, sequence) {
	let sequenceIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[sequenceIndex]) {
      sequenceIndex ++;
    }
    if (sequenceIndex === sequence.length) {
      break;
    }
  }
  return (sequenceIndex === sequence.length);
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

// Test
const array1 = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence1 = [1, 6, -1, 10];
const test1 = isValidSubsequence(array1, sequence1);

console.log(test1);

const array2 = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence2 = [5, 1, 22, 25, 6, -1, 8, 10];
const test2 = isValidSubsequence(array2, sequence2);

console.log(test2);

const array3 = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence3 = [5, 1, 22, 6, -1, 8, 10];
const test3 = isValidSubsequence(array3, sequence3);

console.log(test3);


// Notes:
// Type of problem - reduce to a pattern
// Recursion? Sort?
// Graph? Tree? Data structures?