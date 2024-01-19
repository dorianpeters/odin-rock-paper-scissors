const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log ("computer: " + computerSelection)
console.log("player: " + playerSelection)
console.log(playRound(playerSelection, computerSelection));

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
    }
  } while (true);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return("Tie! Play again.")
  } 
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return("You win. " + playerSelection + " beats " + computerSelection);
    } else if (computerSelection === "paper") {
      return("You lose. " + computerSelection + " beats " + playerSelection);
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return("You win. " + playerSelection + " beats " + computerSelection);
    } else if (computerSelection === "scissors") {
      return("You lose. " + computerSelection + " beats " + playerSelection);
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return("You lose. " + computerSelection + " beats " + playerSelection);
    } else if (computerSelection === "paper") {
      return("You win. " + playerSelection + " beats " + computerSelection);
    }
  }
} // end of playRound function


/*
# create function getComputerChoice
  generate random number between 1-3
    If 1 - "Rock", If 2-"Paper", If 3 - Scissors
    Store computerChoice
    Return computerChoice */
/*
# create function getPlayChoice
    Prompt user to type choice
    store choice in variable
    lower case choice for comparison
    if choice = rock, paper, or scissors
      return choice
    else
      tell user, invalid choice
      reprompt/start over

# create function playRound
  Take two string parametors - player selection and computer selection
  Start with: if playerSelection = rock AND computerselection = rock, answer = tie
              if playerSelection = rock AND computerselection = paper, answer = computer wins
              if playerSelection = rock AND computerselection = scissors, answer = player wins
              (same thing with other combinations)
  Returns string that declares the winner. */


/*
  # create function game() that keeps score and does a best of five
      create variables for playerScore and computerScore.
      playRound
      if player wins, increase score
      if computer wins, increase score
      Stop when playerScore or ComputerScore reach three.
*/
  