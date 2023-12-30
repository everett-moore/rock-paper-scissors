let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  console.log(
    "You: " + playerSelection + " " + "Computer: " + computerSelection
  );

  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    playRound(prompt("Rock, paper, or scissors?"), getComputerChoice());
  }

  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore++;
    }
    if (computerSelection == "Scissors") {
      console.log("You Win! Rock beats scissors");
      playerScore++;
    }
  }

  if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
    }
    if (computerSelection == "Rock") {
      console.log("You Win! Paper beats Rock");
      playerScore++;
    }
  }

  if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      console.log("You Lose! Rock beats Scissors");
      computerScore++;
    }
    if (computerSelection == "Paper") {
      console.log("You Win! Scissors beats Paper");
      playerScore++;
    }
  }
}

function game() {
  if (playerScore > computerScore) {
    console.log(
      "You Win! " +
        "Final score: " +
        "You: " +
        playerScore +
        " " +
        "Computer: " +
        computerScore
    );
  } else {
    console.log(
      "You Lose! " +
        "Final score: " +
        "You: " +
        playerScore +
        " " +
        "Computer: " +
        computerScore
    );
  }
}

const container = document.querySelector("#container");
const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";

btnRock.addEventListener("click", playRound("Rock", getComputerChoice()));
btnPaper.addEventListener("click", playRound("Paper", getComputerChoice()));
btnScissors.addEventListener(
  "click",
  playRound("Scissors", getComputerChoice())
);

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);

game();
