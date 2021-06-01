// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

// For example, if you're given ```coins = [1, 2, 5]```, the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

// I: Array of coins
// O: Minimum sum of money that cannot be created from coins


function nonConstructibleChange(coins) {
  // Sort array
  const sortedCoins = coins.sort((a, b) => (a - b));
  let change = 0;
  // Find smallest sum that does not exist in array
  // Algo: If we have coins sorted - if next coin is greater than 1st coin + 1, we cannot make 1st coin + 1 change
  for (let i = 0; i < sortedCoins.length; i++) {
    if (sortedCoins[i] > (change + 1)) {
      return change + 1;
    }
    change += sortedCoins[i];
  }

  return change + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;


// Tests
let coinsOne = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(coinsOne)); // 20

let coinsTwo = [1, 1, 1, 1, 1];
console.log(nonConstructibleChange(coinsTwo)); // 6

let coinsThree = [1, 5, 1, 1, 1, 10, 15, 20, 100];
console.log(nonConstructibleChange(coinsThree)); // 55