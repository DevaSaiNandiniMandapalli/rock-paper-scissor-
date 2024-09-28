
const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        updateScore(winner);
        displayResult(winner, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
}

function displayResult(winner, playerChoice, computerChoice) {
    if (winner === 'draw') {
        result.textContent = `It's a draw! You both chose ${playerChoice}.`;
    } else if (winner === 'player') {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}
