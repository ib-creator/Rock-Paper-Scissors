/*this line here is to SET IN STOLE THE SELECTIONS, SO WHAT YOU CAN CHOOSE FROM
I WROTE IT AS CONST AS CONST CANNOT BE RE-DEFINED*/

let computerSelection;
let playerSelection;
let playerScore = 0
let computerScore = 0
let roundWinner = ''

const mySelections = ["Rock", "Paper", "Scissors"];




/* 

1. here you are saying what you want to happen
when the computer plays. You want it to choose
a random item from the array above
so you use the return to get a random item
you use the length to ensure that the computer
chooses any of the three, so the length of 
the array

2. in essence, you are saying everytime computer
play function is ran, it will be random item

*/


function computerPlay() {

    return mySelections[~~(Math.random() * mySelections.length)];
}


function playerSelection() {

    return mySelections[~~(Math.random() * mySelections.length)];
}

/* 

1. Here you are declaring a const of a message
that will pop up everytime the function below is ran

2. this function will run for both player and computer

you should always define the variable in a message
*/



const gameMessage = ["You Lose! Paper beats Rock"]

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();



    if (computerSelection === playerSelection) {
        displayResults("Tie game!");
    }


    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++
        roundWinner = 'player'
    }

    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        computerScore++
        roundWinner = 'computer'
    }

    updateScoreMessage(roundWinner, playerSelection, computerSelection)


}


function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {


        case 0:
            return "Rock"

        case 1:
            return "Paper"

        case 2:
            return "Scissors"
    }
}


/* this is written to say that the game is over IF either
player has a score of 5 OR if computer has a score of 5*/
function isGameOver() {
    return playerScore === 5 || computerScore === 5
}
