function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}
