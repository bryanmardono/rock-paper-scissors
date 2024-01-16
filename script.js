const weaponBtns = document.querySelectorAll('.weapon-button');
const rockBtn = document.querySelector('.rock-button');
const paperBtn = document.querySelector('.paper-button');
const scissorsBtn = document.querySelector('.scissors-button');
const playerSymbol = document.getElementById('playerSymbol');
const computerSymbol = document.getElementById('computerSymbol');
const roundCounter = document.querySelector('.round-counter');
const lives = document.querySelector('.lives');
const combatText = document.querySelector('.combat-text');
const gameEndText = document.querySelector('.game-end-text');
const wrapper = document.querySelector('.wrapper');
const gameCounter = document.querySelector('.game-counter');
const gameRestartBtn = document.querySelector('.game-restart');
const identity = document.querySelectorAll('.identity');

let playerLives = 5;
let computerLives = 5;
let roundNumber = 0;
let playerSelection;

function getComputerChoice() {
    let value1 = Math.floor(Math.random()*3);
    let computerSelection;
    switch (value1) {
        case 0:
            computerSelection = "ROCK";
            computerSymbol.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/4953/4953463.png" width = "100px" height = auto>';
            break
        case 1:
            computerSelection = "PAPER";
            computerSymbol.innerHTML = '<img src="resources/paper.png" width = "100px" height = "100px">';
            break
        case 2:
            computerSelection = "SCISSORS";
            computerSymbol.innerHTML = '<img src="https://static.vecteezy.com/system/resources/previews/010/366/281/original/scissor-icon-transparent-free-png.png" width = "100px" height = auto>';
            break
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            combatText.textContent = "Two same choices result in a draw. Please try again";
            wrapper.classList.remove('win-border', 'lose-border');
            wrapper.classList.add('tie-border');
            gameCounter.classList.remove('win-border', 'lose-border');
            gameCounter.classList.add('tie-border');
            break;
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"):
            playerLives -= 1;
            combatText.textContent = `Congratulations! Your ${playerSelection} overpowered the enemy's ${computerSelection}. You have won this round! `;
            wrapper.classList.remove('tie-border', 'lose-border');
            wrapper.classList.add('win-border');
            gameCounter.classList.remove('tie-border', 'lose-border');
            gameCounter.classList.add('win-border');
            break;
        case (playerSelection === "SCISSORS" && computerSelection === "ROCK" ||
        playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS"):
            computerLives -= 1;
            combatText.textContent = `Unforunate defeat.. The enemy's ${computerSelection} overpowered your ${playerSelection}. You have lost one life. `;
            wrapper.classList.remove('win-border', 'tie-border');
            wrapper.classList.add('lose-border');
            gameCounter.classList.remove('win-border', 'tie-border');
            gameCounter.classList.add('lose-border');
            break;
    }
    countRound();
    lives.textContent = `Your Lives: ${playerLives} | Enemy Lives: ${computerLives}`;
    endGame(playerLives,computerLives);
}

function countRound() {
    roundNumber += 1;
    roundCounter.textContent = `${roundNumber}`;
    return roundNumber;
}

function rockBtnClickHandler() {
    playerSelection = "ROCK";
    playerSymbol.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/4953/4953463.png" width = "100px" height = auto>';
    playRound(playerSelection, getComputerChoice());
    identity.style.position = 'absolute';
}

function paperBtnClickHandler() {
    playerSelection = "PAPER";
    playerSymbol.innerHTML = '<img src="resources/paper.png" width = "100px" height = "100px">';
    playRound(playerSelection, getComputerChoice());
    identity.style.position = 'absolute';
}

function scissorsBtnClickHandler() {
    playerSelection = "SCISSORS";
    playerSymbol.innerHTML = '<img src="https://static.vecteezy.com/system/resources/previews/010/366/281/original/scissor-icon-transparent-free-png.png" width = "100px" height = auto>';
    playRound(playerSelection, getComputerChoice());
    identity.style.position = 'absolute';
}

function getPlayerChoice() {
        rockBtn.addEventListener('click', rockBtnClickHandler);
        paperBtn.addEventListener('click', paperBtnClickHandler);
        scissorsBtn.addEventListener('click', scissorsBtnClickHandler);
    }
    


function endGame(playerHealth, computerHealth) {
    if (playerHealth === 0 || computerHealth === 0) {
        rockBtn.removeEventListener('click',rockBtnClickHandler);
        paperBtn.removeEventListener('click',paperBtnClickHandler);
        scissorsBtn.removeEventListener('click',scissorsBtnClickHandler);
        rockBtn.removeEventListener('click', getComputerChoice);
        paperBtn.removeEventListener('click', getComputerChoice);
        scissorsBtn.removeEventListener('click', getComputerChoice);
        weaponBtns.forEach((button) => {
            button.classList.add('disabled-button');
        })
        if (playerHealth > computerHealth) {
            combatText.textContent = "The enemy has no lives left.You have slain the enemy!";
            gameEndText.textContent = "You Have Won The Battle!";  
        }
        else {
            combatText.textContent = "You have been slain! Better luck next time.";
            gameEndText.textContent = "You Have Lost The Battle!";  
        }
        gameEndText.style.visibility = 'visible';
        gameRestartBtn.style.visibility = 'visible';
        restartGame();
    }
}

function restartGame() {
    gameRestartBtn.addEventListener('click', () => {
        window.location.reload();
    });
}

function playGame() {
    rockBtn.addEventListener('click', getComputerChoice);
    paperBtn.addEventListener('click', getComputerChoice);
    scissorsBtn.addEventListener('click', getComputerChoice);
    getPlayerChoice();
}


playGame();
