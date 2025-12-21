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

    // human wins round
    if ((formattedHumanChoice == "Rock" && computerChoice == "Scissors") || (formattedHumanChoice == "Paper" && computerChoice == "Rock") || (formattedHumanChoice == "Scissors" && computerChoice == "Paper")) {
        // display string announcing human as winner
        result.textContent = `You win! ${formattedHumanChoice} beats ${computerChoice}.`;
        console.log(`You win! ${formattedHumanChoice} beats ${computerChoice}.`);
        humanScore++;
    // computer wins round
    } else if ((formattedHumanChoice == "Rock" && computerChoice == "Paper") || (formattedHumanChoice == "Paper" && computerChoice == "Scissors") || (formattedHumanChoice == "Scissors" && computerChoice == "Rock")) {
        // display string annuoncing computer as winner
        result.textContent = `You lose! ${computerChoice} beats ${formattedHumanChoice}.`;
        console.log(`You lose! ${computerChoice} beats ${formattedHumanChoice}.`);
        computerScore++;
    // choices are the same
    } else {
        // display string announcing a tie
        result.textContent = `It's a tie! You both chose ${formattedHumanChoice}.`;
        console.log(`It's a tie! You both chose ${formattedHumanChoice}.`);
    }
    
    // display updated score
    score.textContent = `Score - Human: ${humanScore} | Computer: ${computerScore}`;
}

// add event listeners for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    })
});

// initialize score variables
let humanScore = 0;
let computerScore = 0;

// get reference to div element for results
const resultsDiv = document.getElementById("results");

// create elements for score and results
const result = document.createElement("result");
const score = document.createElement("p");

// display score
score.textContent = `Score - Human: ${humanScore} | Computer: ${computerScore}`;

// append elements to div
resultsDiv.appendChild(score);
resultsDiv.appendChild(result);
