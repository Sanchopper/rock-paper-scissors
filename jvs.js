function getCompChoice(){
    let compChoice;
    let a = Math.floor(Math.random() * 3);
    if (a === 0) {
        choice = "rock";
    }   else if (a === 1) {
        choice = "paper";
    }   else if (a === 2) {
        choice = "scissors";
    }
    return compChoice
}

function getHumanChoice() {
    let humanChoice = window.prompt("choose rock paper scissors").toLowerCase();
    return humanChoice

}
let humanScore = 0;
let compScore = 0;

function playRound(humanChoice, compChoice) {
    if (compChoice === humanChoice) {
        console.log('DRAW')
    } else if ((humanChoice == 'paper' && compChoice == 'rock') || (humanChoice == 'scissors' && compChoice == 'rock') || (humanChoice == 'rock' && compChoice == 'scissors')) {
        humanScore += 1;
    } else {
        compScore += 1;
    } 
    
}