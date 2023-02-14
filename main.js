
let pPoints = 0
let cPoints = 0
let playerSelection
let computerSelection
let pScore= document.querySelector('.pScore')
let cScore= document.querySelector('.cScore')
let playerShow = document.querySelector('.playerShow')
let computerShow = document.querySelector('.computerShow')
let resultsShow =  document.querySelector('.resultsShow')
const userChoice= document.querySelectorAll('button')
let results

userChoice.forEach(choice => {
    choice.addEventListener('click', (e) => {
        choice.style.backgroundColor='cyan'
        playerSelection = choice.textContent
        computerSelection = getComputerChoice()
        playerShow.textContent= "Player Pick: " + playerSelection
        computerShow.textContent= "Computer Pick: " + computerSelection
        playRound(playerSelection,computerSelection)
        pointDisplay()
        resultsShow.textContent =results

    })
})


function pointDisplay () {
    
        pScore.textContent = "Player Points---" + pPoints
        cScore.textContent = "Computer Points---" + cPoints
        if(pPoints === 5) {
            alert("Player Wins The Game!!")
            location.reload()
        } else if (cPoints === 5) {
            alert("Computer Wins The Game")
            location.reload()
        }
   
}


console.log(pointDisplay())
    




/*Round*/
function playRound(playerSelection, computerSelection) {
   
    
    if (playerSelection === computerSelection) {

        results= "It's A Tie!"
    } else if(playerSelection === "rock" && computerSelection === "scissor") {
        pPoints++
        results = "Player Wins, Rock beats Scissor"
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        pPoints++
        results= "Player Wins, Paper beats Rock "
    } else if(playerSelection === "scissor" && computerSelection === "paper") {
        pPoints++
        results= "Player Wins, Scissor beats Paper"
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        cPoints++
        results= "Player Lost, Paper beats Rock"
    } else if(playerSelection === "paper" && computerSelection === "scissor") {
        cPoints++
        results= "Player Lost, Scissor beats Paper"
    } else if(playerSelection === "scissor" && computerSelection === "rock") {
        cPoints++
        results= "Player Lost, Rock beats Scissor"
    }
    return results
}


// function winner(){
//     if (pPoints > cPoints) {
//         return "Player Wins the Game!!"
//     } else if ( cPoints > pPoints) {
//         return "Player Loses"
//     } else if (pPoints === cPoints) {
//         return "It's A TIE"
//     }
// }



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
