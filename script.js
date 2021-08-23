let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, targetNumber){
  let humanDiff = Math.abs(humanGuess - targetNumber);
  let computerDiff = Math.abs(computerGuess - targetNumber);
  if (humanDiff < computerDiff){
    return true;
  }
  else if (humanDiff > computerDiff) {
    return false;
  }
  else if (humanDiff === computerDiff) {
    return true;
  }
}

function updateScore(winner){
  if (winner === 'human'){
   humanScore += 1;
  }
  else if (winner === 'computer'){
    computerScore += 1;
  }
}

function advanceRound() {
  return currentRoundNumber += 1;
}
