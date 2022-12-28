//game();

let computerPoints = 0;
let playerPoints = 0;

const rockBtn = document.querySelector("#rockbtn");
const paperBtn = document.querySelector("#paperbtn");
const scissorBtn = document.querySelector("#scissorbtn");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);

let playerPointsPara = document.querySelector("#playerpoints");
let computerPointsPara = document.querySelector("#computerpoints");
let winningStatement = document.createElement("div");
let winningStatementOn = false;

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
}

function playRound() {
    playerSelection = this.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    
    if (computerSelection === "rock") {
        switch(playerSelection) {
            case "paper": playerPoints++;
            case "scissor": computerPoints++;
        }
    }
    if (computerSelection === "paper") {
        switch(playerSelection) {
            case "scissor": playerPoints++;
            case "rock": computerPoints++;
        }
    }
    if (computerSelection === "scissor") {
        switch(playerSelection) {
            case "rock": playerPoints++;
            case "paper": computerPoints++;
        }
    }

    if (winningStatementOn) {
        document.body.removeChild(winningStatement);
        winningStatementOn = false;
    } else if (playerPoints === 5) {
        winningStatement.textContent = "You Win!";
        document.body.appendChild(winningStatement);
        winningStatementOn = true;
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        winningStatement.textContent = "Computer wins!"
        document.body.appendChild(winningStatement);
        winningStatementOn = true;
        playerPoints = 0;
        computerPoints = 0;
    }

    playerPointsPara.textContent = `Player Points: ${playerPoints}`;
    computerPointsPara.textContent = `Computer Points: ${computerPoints}`;
}


