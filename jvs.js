function getCompChoice(){
    let compChoice;
    let a = Math.floor(Math.random() * 3);
    if (a === 0) {
        compChoice = 'rock';
    }   else if (a === 1) {
        compChoice = 'paper';
    }   else if (a === 2) {
        compChoice = 'scissors';
    }
    return compChoice
}

function getHumanChoice() {
    humanChoice = window.prompt("choose rock paper scissors").toLowerCase()
    return humanChoice

}
let humanScore = 0;
let compScore = 0;

function playRound(compChoice, humanChoice){
    if (humanChoice == compChoice) {
        console.log('DRAW')
    } else if (humanChoice == 'rock' && compChoice == 'scissors') {
        console.log('YOU WON')
        humanScore = humanScore + 1
    } else if (humanChoice == 'paper' && compChoice == 'rock'){
        console.log('YOU WON')
        humanScore = humanScore + 1 
    } else if (humanChoice == 'scissors' && compChoice == 'paper') {
        console.log('YOU WON')
        humanScore = humanScore + 1
    } else {
        console.log('YOU LOOSE')
        compScore = compScore + 1
    }
}


function playGame() {

    for (let i = 0; i<5; i++) {
        let humanselection = getHumanChoice()
        let compselection = getCompChoice()
        playRound(compselection, humanselection)    
        console.log(humanScore, compScore)
    }

}

playGame()