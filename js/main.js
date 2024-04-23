// Step #1 - Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let num = Math.floor(Math.random() * 3);
  return choices[num].toLowerCase();
}

// Step #2 - Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

let playerWinCount = 0;
let computerWinCount = 0;

function playRound(userSelection, computerSelection) {
  computerSelection = getComputerChoice();
  userSelection = prompt(
    "Please choose one of the following options: Rock, Paper or Scissors"
  );

  switch (userSelection) {
    case "rock":
      if (computerSelection === "rock") {
        console.log("It's a tie, play again!");
        playRound(); // Bonus Points: Account for TIES by re-playing the round.
      } else if (computerSelection === "paper") {
        console.log("The player lost! Paper beats Rock, try again.");
        ++computerWinCount;
      } else if (computerSelection === "scissors") {
        console.log("The player wins! Rock beats Scissors.");
        ++playerWinCount;
      }
      break;
    case "paper":
      if (computerSelection === "paper") {
        console.log("It's a tie, play again!");
        playRound(); // Bonus Points: Account for TIES by re-playing the round.
      } else if (computerSelection === "scissors") {
        console.log("The player lost! Scissors beat Paper, try again.");
        ++computerWinCount;
      } else if (computerSelection === "rock") {
        console.log("The player wins! Paper beats Rock.");
        ++playerWinCount;
      }
      break;
    case "scissors":
      if (computerSelection === "scissors") {
        console.log("It's a tie, play again!");
        playRound(); // Bonus Points: Account for TIES by re-playing the round.
      } else if (computerSelection === "paper") {
        console.log("The player wins! Scissors beats Paper.");
        ++playerWinCount;
      } else if (computerSelection === "rock") {
        console.log("The player lost! Rock beats Scissors.");
        ++computerWinCount;
      }
      break;
  }
  // Return the updated scores
  return [playerWinCount, computerWinCount];
}
// Step #3 - Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
function game() {
  while (playerWinCount < 5 && computerWinCount < 5) {
    [playerWinCount, computerWinCount] = playRound();
  }

  if (playerWinCount === 5) {
    console.log("Congratulations! You won the best-of-five series!");
  } else {
    console.log("Sorry, the computer won the best-of-five series.");
  }
}
game();
