let playerScore = 0;
let computerScore = 0;
playerSelection = null;

const state = document.querySelector("#state");
const results = document.querySelector("#results");
results.textContent = "Click a button to start playing!";
const container = document.querySelector("#container");
const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);

btnRock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

btnPaper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});

btnScissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  state.textContent =
    "You: " + playerSelection + " " + "Computer: " + computerSelection;
  if (playerSelection == computerSelection) {
    results.textContent = "It's a tie!";
  }

  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      results.textContent = "You Lose! Paper beats Rock";
    }
    if (computerSelection == "Scissors") {
      results.textContent = "You Win! Rock beats Scissors";
    }
  }

  if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      results.textContent = "You Lose! Scissors beats paper";
    }
    if (computerSelection == "Rock") {
      results.textContent = "You Win! Paper beats Rock";
    }
  }
}

if (playerSelection == "Scissors") {
  if (computerSelection == "Rock") {
    results.textContent = "You Lose! Rock beats Scissors";
  }
  if (computerSelection == "Paper") {
    results.textContent = "You Win! Scissors beats Paper";
  }
}
