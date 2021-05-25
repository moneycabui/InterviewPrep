// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a funciton that returns the winner of the tournament. The input arrays are named 'competitions' and 'results', respectively. the 'competitions' array has elements in the form of '[homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The 'results' array contains information about the winner of each corresponding competition in the 'competitions' array. Specifically, 'results[i]' denotes the winner of 'competitions[i]', where a '1' in the 'results' array means that the home team in the corresponding competition won and a '0' means that the way team won.

// It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams

// I: Two arrays - competitions [home team, away team] and results 1 = home team won; 0 = away team won
// O: String - name of team that one
// Notes: Each win is 3 points

function tournamentWinner(competitions, results) {
  // Write your code here.
  // Need a way to keep track of each team's score
  let highestScore = 0;
  let bestTeam = '';
  let teamScores = {};
  for (let i = 0; i < competitions.length; i ++) {
    // If results at i = 1 then competitions at i at 0 gets 3 points --> home team wins
    console.log('Results at i: ', results[i]);
    console.log('Competitions at i: ', competitions[i][0]);
    if (results[i] === 1) {
      // Need to see if team exists in object - if exists then add 3 if not then create new key
      if (!teamScores[competitions[i][0]]) {
        teamScores[competitions[i][0]] = 3;
        teamScores[competitions[i][1]] = 0;
      } else {
        teamScores[competitions[i][0]] += 3;
      }
      if (teamScores[competitions[i][0]] > highestScore) {
        highestScore = teamScores[competitions[i][0]];
        bestTeam = competitions[i][0];
      }
    }
    // If results at i = 0 then competitions at i at 1 gets 3 points --> away team wins
    if (results[i] === 0) {
      if (!teamScores[competitions[i][1]]) {
        teamScores[competitions[i][0]] = 0;
        teamScores[competitions[i][1]] = 3;
      } else {
        teamScores[competitions[i][1]] += 3;
      }
      if (teamScores[competitions[i][1]] > highestScore) {
        highestScore = teamScores[competitions[i][1]];
        bestTeam = competitions[i][1];
      }
    }
  }
  return bestTeam;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

// Tests:

let competitionsOne = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
];
let resultsOne = [0, 0, 1];
console.log(tournamentWinner(competitionsOne, resultsOne));

