const throws = ["rock", "paper", "scissors"];
const numRounds = 5;

function computerPlay() {
  let selection = Math.floor(Math.random() * 3);
  return throws[selection];
}

function playRound(computer, player) {
  let outcome = -1;

  if ((computer === "rock" && player === "scissors") || 
  (computer === "paper" && player === "rock") || 
  (computer === "scissors" && player === "paper")) {
    outcome = 1;
  } else if (computer === player){
    outcome = 0;
  } else if ((player === "rock" && computer === "scissors") || 
  (player === "paper" && computer === "rock") || 
  (player === "scissors" && computer === "paper")){
    outcome = 2;
  }
  
  return outcome;
}

function game() {
  let playerWins = 0;
  let outcome = "";

  for (let i = 0; i < numRounds; i++) {
    const computer = computerPlay();;
    const player = prompt("Enter your choice [rock, paper, scissors]: ").toLowerCase();
    outcome = "";

    const result = playRound(computer, player);

    if (result == 0) {
      outcome = ("You tied the round! You both chose " + player[0].toUpperCase() + player.substring(1) + ".");
      i--;
    } else if (result == 1) {
      outcome = ("You lose the round! " + computer[0].toUpperCase() + computer.substring(1) + " beats " + 
      player[0].toUpperCase() + player.substring(1) + ".");
    } else if (result == 2) {
      outcome = ("You win the round! " + player[0].toUpperCase() + player.substring(1) + " beats " + 
      computer[0].toUpperCase() + computer.substring(1) + ".");
      playerWins++;
    } else if (result == -1) {
      outcome = "Invalid input! Try again!";
      i--;
    }
    console.log(outcome);
  }

  if (playerWins >= 3) {
    outcome = "You won the game! Congratulations you won " + playerWins + " rounds out of 5!";
  } else {
    outcome = "You lost the game! You only won " + playerWins + " rounds out of 5!";
  }

  console.log(outcome);
}

game();