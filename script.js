/**
 * getComputerChoice
 * return one of the following strings values:
 * "rock", "paper", or "scissors"
 */

function getComputerChoice() {
    // randomly select a number from 0, 1, 2 
    let random = Math.floor(Math.random() * 3);

    // assign number to string
    let computerChoice;
    if (random == 0) {
        computerChoice = "Rock";
    } else if (random == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

/**
 * getHumanChoice
 * return one of the valid choices depending on what the user inputs
 */

function getHumanChoice() {
    // prompt user for choice
    let humanChoice = prompt("Please enter a choice of rock, paper or scissors.");
    return humanChoice;
}

/**
 * playRound
 * takes human and computer player choices as arguments, plays a single round, 
 * increments the round winner's score and logs a winner announcement
 */

function playRound(humanChoice, computerChoice) {
    // make humanChoice case-insensitive
    let formattedHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    let result;
    // human wins round
    if ((formattedHumanChoice == "Rock" && computerChoice == "Scissors") || (formattedHumanChoice == "Paper" && computerChoice == "Rock") || (formattedHumanChoice == "Scissors" && computerChoice == "Paper")) {
        // log string announcing human as winner
        console.log(`You win! ${formattedHumanChoice} beats ${computerChoice}.`);
        result = "humanWin";
    // computer wins round
    } else if ((formattedHumanChoice == "Rock" && computerChoice == "Paper") || (formattedHumanChoice == "Paper" && computerChoice == "Scissors") || (formattedHumanChoice == "Scissors" && computerChoice == "Rock")) {
        // log string annuoncing computer as winner
        console.log(`You lose! ${computerChoice} beats ${formattedHumanChoice}.`);
        result = "computerWin";
    // choices are the same
    } else {
        // log string announcing a tie
        console.log(`It's a tie! You both chose ${formattedHumanChoice}.`);
        result = "noWinner";
    }
    return result;
}

/**
 * playGame
 * calls playRound to play 5 rounds 
 * keeps track of scores and declares a winner at the end
 */

function playGame() {
    // initialize score variables
    let humanScore = 0;
    let computerScore = 0;
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    const result = playRound(humanSelection, computerSelection);

    // increment scores based on round winner
    if (result == "humanWin") {
        humanScore++;
    } else if (result == "computerWin") {
        computerScore++;
    }

    // log message for final winner after 5 rounds
    if (humanScore > computerScore) {
        console.log(`You win with a score of ${humanScore} : ${computerScore} after 5 rounds!`);
    } else if (humanScore < computerScore) {
        console.log(`You lose with a score of ${humanScore} : ${computerScore} after 5 rounds!`);
    } else {
        console.log(`It's a tie with a score of ${humanScore} : ${computerScore} after 5 rounds!`);
    }
}

playGame();
