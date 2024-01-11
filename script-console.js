let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function playGame() {
    while (roundNumber < 5) {
        let playerSelection;
        while (true) {
            playerSelection = prompt("Play Your Hand: ");
            playerSelection = playerSelection.toUpperCase();
            if (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS") {
                break;
            }
        }
        let computerSelection = getComputerChoice();
        computerSelection = getComputerChoice().toUpperCase();
        console.log (`You played ${playerSelection}`);
        console.log (`Computer played ${computerSelection}`);
        playRound(playerSelection,computerSelection);
        console.log(`Your score is ${playerScore} | Computer score is ${computerScore}`);
        console.log ("-------------------------------------------------------------");
        roundNumber +=1;
    }
}

function getComputerChoice() {
    let value1 = Math.floor(Math.random()*3);
    switch (value1) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}


function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            console.log ("%cTwo same choices result in a draw. Please try again", 'color : orange');
            break;
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"):
            playerScore += 1;
            console.log (`%cCongratulations! Your ${playerSelection} overpowered the enemy's ${computerSelection}. You have won this round! `, 'color : green');
            break;
        case (playerSelection === "SCISSORS" && computerSelection === "ROCK" ||
        playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS"):
            computerScore += 1;
            console.log (`%cUnforunate defeat.. The enemy's ${computerSelection} overpowered your ${playerSelection}. You have lost one life. `, 'color : red');
            break;
    }
}



function endGame() {
    if (playerScore > computerScore) {
        console.log("You have slain the enemy! The battle is your victory!")
    }
    else if (playerScore == computerScore) {
        console.log ("Although not unscathed, both you and the enemy escaped the battle with a draw!")
    }
    else {
        console.log ("You have been slain! Better luck next time.")
    }
    
}

playGame();
endGame();