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
    }
    if (computerSelection == "Scissors") {
      console.log("You Win! Rock beats scissors");
    }
  }

  if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      console.log("You Lose! Scissors beats Paper");
    }
    if (computerSelection == "Rock") {
      console.log("You Win! Paper beats Rock");
    }
  }

  if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      console.log("You Lose! Rock beats Scissors");
    }
    if (computerSelection == "Paper") {
      console.log("You Win! Scissors beats Paper");
    }
  }
}
