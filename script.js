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

// add event listeners for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    })
});
