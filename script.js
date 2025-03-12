function getComputerChoice() {
    let num = Math.trunc(Math.random()*3) + 1
    if(num === 1){
        return `rock`
    }
    else if(num === 2){
        return `paper`
    }
    else {
        return `scissors`
    }
}

function getHumanChoice() {
    return prompt(`Rock, Paper, Scissors`)
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice.toLowerCase()
    const computerSelection = computerChoice.toLowerCase()
    console.log(humanSelection, computerSelection);
    if(humanChoice === computerChoice) {console.log(`Draw! Try again!`);
    } 
    else if(humanSelection === `rock` && computerSelection === `paper`){ console.log(`You lose! Paper beats Rock!`);
        computerScore++
    }
    else if(humanSelection === `rock` && computerSelection === `scissors`)  {console.log(`You win! Rock beats Scissors!`);
        humanScore++
    }
    else if(humanSelection === `paper` && computerSelection === `rock`)  {console.log(`You win! Paper beats Rock!`);
        humanScore++
    }
    else if(humanSelection === `paper` && computerSelection === `scissors`)  {console.log(`You lose! Scissors beats Paper!`);
        computerScore++
    }
    else if(humanSelection === `scissors` && computerSelection === `rock`)  {console.log(`You lose! Rock beats Scissors`);
        computerScore++
    }
    else if(humanSelection === `scissors` && computerSelection === `paper`)  {console.log(`You win! Scissors beats paper!`);
        humanScore++
    }
}

playRound(getHumanChoice(),getComputerChoice())