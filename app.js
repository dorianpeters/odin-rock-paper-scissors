let playerWins = 0;
let computerWins = 0;
game();

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3 + 1); // generate random number between 1-3
  if (choice === 1) {
    return "rock";
  }  else if (choice === 2) {
    return "paper";
  }  else if (choice === 3) {
    return "scissors";
  } else {
    console.log("Error: Random number outside 1-3");
  }
}

function getPlayerChoice () {
  do {
    const userAnswer = prompt("Choose rock, paper, or scissors: ");
    const answer = userAnswer.toLowerCase();
    if ((answer === "rock") || (answer === "paper") || (answer === "scissors")) {
      return answer;
    } else {
      console.log("You must enter rock, paper or scissors.");
    }
  } while (true);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return("Tie! Play again.");
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerWins++;
      return("You win. " + playerSelection + " beats " + computerSelection);
    } else if (computerSelection === "paper") {
      computerWins++;
      return("You lose. " + computerSelection + " beats " + playerSelection);
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerWins++;
      return("You win. " + playerSelection + " beats " + computerSelection);
    } else if (computerSelection === "scissors") {
      computerWins++;
      return("You lose. " + computerSelection + " beats " + playerSelection);
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerWins++;
      return("You lose. " + computerSelection + " beats " + playerSelection);
    } else if (computerSelection === "paper") {
      playerWins++;
      return("You win. " + playerSelection + " beats " + computerSelection);
    }
  } 
}

function game() {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  console.log ("computer: " + computerSelection);
  console.log("player: " + playerSelection);
  console.log(playRound(playerSelection, computerSelection));

  if (playerWins > computerWins) {
    console.log("You are the winner!");
  }  else {
    console.log("You are the loser.");
  }
  console.log("You won " + playerWins + " rounds. The computer won " + computerWins + " rounds.");
}
  