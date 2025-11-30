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

// create and initialize score variables
let humanScore = 0;
let computerScore = 0;

/**
 * playRound
 * takes human and computer player choices as arguments, plays a single round, 
 * increments the round winner's score and logs a winner announcement
 */

function playRound(humanChoice, computerChoice) {
    // make humanChoice case-insensitive
    let formattedHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    // log string announcing winner
    let winMessage;
    // human wins round
    if ((formattedHumanChoice == "Rock" && computerChoice == "Scissors") || (formattedHumanChoice == "Paper" && computerChoice == "Rock") || (formattedHumanChoice == "Scissors" && computerChoice == "Paper")) {
        console.log(`You win! ${formattedHumanChoice} beats ${computerChoice}.`);
        // increment score
        humanScore++;
    // computer wins round
    } else if ((formattedHumanChoice == "Rock" && computerChoice == "Paper") || (formattedHumanChoice == "Paper" && computerChoice == "Scissors") || (formattedHumanChoice == "Scissors" && computerChoice == "Rock")) {
        console.log(`You lose! ${computerChoice} beats ${formattedHumanChoice}.`);
        // increment score
        computerScore++;
    } else {
        console.log(`It's a tie! You both chose ${formattedHumanChoice}.`);
    }
}

// play 1 round of rock paper scissors
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
