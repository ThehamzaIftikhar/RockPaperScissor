game();

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissor";
    }
}

function playRound(playerSelection, ComputerSelection) {
    playerSelection = playerSelection.toLowercase();
    if (ComputerSelection === "rock") {
        switch(playerSelection) {
            case "rock": return "It's a tie";
            case "paper": return "Player wins";
            case "scissor": return "Computer wins";
        }
    }
    if (ComputerSelection === "paper") {
        switch(playerSelection) {
            case "paper": return "It's a tie";
            case "scissor": return "Player wins";
            case "rock": return "Computer wins";
        }
    }
    if (ComputerSelection === "scissor") {
        switch(playerSelection) {
            case "scissor": return "It's a tie";
            case "rock": return "Player wins";
            case "paper": return "Computer wins";
        }
    }
}

function getPlayerChoice() {
    let ans;
    while (!(ans === "rock" || ans === "paper" || ans === "scissor" )) {
        ans = prompt("Enter rock, paper or scissor");
    }
    return ans;
}

function game() {
    let playerPoints = 0;
    let ComputerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound(getPlayerChoice, getComputerChoice)
        console.log(winner);
        switch(winner) {
            case "Player wins": playerPoints++;
            case "Computer wins": ComputerPoints++;
        }
    }
    if (playerPoints > ComputerPoints) {
        console.log("Player won the game");
    } else if (ComputerPoints > playerPoints) {
        console.log("Compute wins the game");
    } else {
        console.log("The game was a tie");
    }
}