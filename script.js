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
        computerChoice = "rock";
    } else if (random == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

console.log(getComputerChoice());

/**
 * getHumanChoice
 * return one of the valid choices depending on what the user inputs
 */

function getHumanChoice() {
    // prompt user for choice
    let humanChoice = prompt("Please enter a choice of rock, paper or scissors.");
    return humanChoice;
}

console.log(getHumanChoice());