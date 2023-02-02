function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
        if (num === 0) {
            return "rock"
        } else if (num === 1) {
            return "paper"
        } else if (num === 2) {
            return "scissor"
        }
}

let pPoints = 0
let cPoints = 0

/*Round*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        return "It's A Tie!"
    } else if(playerSelection === "rock" && computerSelection === "scissor") {
        pPoints++
        return "Player Wins, Rock beats Scissor"
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        pPoints++
        return "Player Wins, Paper beats Scissor "
    } else if(playerSelection === "scissor" && computerSelection === "paper") {
        pPoints++
        return "Player Wins, Scissor beats Paper"
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        cPoints++
        return "Player Lost, Paper beats Rock"
    } else if(playerSelection === "paper" && computerSelection === "scissor") {
        cPoints++
        return "Player Lost, Scissor beats Paper"
    } else if(playerSelection === "scissor" && computerSelection === "rock") {
        cPoints++
        return "Player Lost, Rock beats Scissor"
    }
}

function game(){
    const playerSelection = window.prompt("Rock,Paper,Scissor").toLowerCase()
    const computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection)
}
function winner(){
    if (pPoints > cPoints) {
        return "Player Wins the Game!!"
    } else if ( cPoints > pPoints) {
        return "Player Loses"
    } else if (pPoints === cPoints) {
        return "It's A TIE"
    }
}

for(let i =0; i < 5; i++) {
    console.log(game())
    console.log(`Player Score = ${pPoints}`);
    console.log(`Computer Score = ${cPoints}`)
   
}
console.log(winner())

