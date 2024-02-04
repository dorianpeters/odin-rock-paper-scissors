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
  let buttons = document.querySelector('#buttons');
  buttons.addEventListener('click', (e) => {
    return e.target.id;
  });  
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
  let outcome = playRound(playerSelection, computerSelection);

  let msg = "";
  msg += "computer: " + computerSelection + 
  "\nplayer: " + playerSelection + "\n" + outcome;
  let msgDiv = document.querySelector("#message");
  msgDiv.textContent = msg;
  let scoreDiv = document.querySelector("#score");
  scoreDiv.textContent = "Running score:\n" + "Computer: " + computerWins +
    "  Player: " + playerWins;

  if ((playerWins >= 5) || (computerWins >= 5)) {
    finalResultDiv = document.querySelector("#finalResult");
    if (playerWins > computerWins) {
      finalResultDiv.textContent = "Final result: You are the winner!";
    }  else {
      finalResultDiv.textContent = "Final result: You are the loser.";
    }
  }
} // end of game
  