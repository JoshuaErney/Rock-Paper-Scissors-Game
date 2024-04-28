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

// Create button group div and then buttons on the page for each choice the player can make
const body = document.querySelector("body");

// Creates and Adds Div element to body tag
const btnGroup = document.createElement("div");
body.appendChild(btnGroup);

// Adds "btnGroup" class to div element
btnGroup.classList.add("btnGroup");

// Creates and Adds Button as Child to the button group div
const btn = document.createElement("button");
btn.textContent = "";
btnGroup.appendChild(btn);

// Creates and Adds Results Div to body tag
const resultContainer = document.createElement("div");
body.appendChild(resultContainer);
