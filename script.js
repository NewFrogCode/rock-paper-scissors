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



function playGame() {
    let humanScore = 0
    let computerScore = 0
    
    function playRound(humanChoice, computerChoice) {
        const humanSelection = humanChoice.toLowerCase()
        const computerSelection = computerChoice.toLowerCase()
        if(humanChoice === computerChoice) {console.log(`Draw! Try again!`);
        } 
        else if(humanSelection === `rock` && computerSelection === `paper`){ 
            computerScore++
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
        }
        else if(humanSelection === `rock` && computerSelection === `scissors`)  {
            humanScore++
            humanScoreDiv.textContent = `Human: ${humanScore}`;
        }
        else if(humanSelection === `paper` && computerSelection === `rock`)  {
            humanScore++
            humanScoreDiv.textContent = `Human: ${humanScore}`;
        }
        else if(humanSelection === `paper` && computerSelection === `scissors`)  {
            computerScore++
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
        }
        else if(humanSelection === `scissors` && computerSelection === `rock`)  {
            computerScore++
            computerScoreDiv.textContent = `Computer: ${computerScore}`;
        }
        else if(humanSelection === `scissors` && computerSelection === `paper`)  {
            humanScore++
            humanScoreDiv.textContent = `Human: ${humanScore}`;
        }
        if(humanScore > computerScore && humanScore === 5) {gameWinner.textContent = `HUMAN WON`; disableButtons() }
        else if(computerScore > humanScore && computerScore === 5) {gameWinner.textContent = `COMPUTER WON`; disableButtons() }
    }

    function disableButtons() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    
    
    
    
    const rockButton = document.querySelector(".rock")
    const paperButton = document.querySelector(`.paper`)
    const scissorsButton = document.querySelector(`.scissors`)
    const humanScoreDiv = document.querySelector(`.score-human`)
    const computerScoreDiv = document.querySelector(`.score-computer`)
    const gameWinner = document.querySelector(`.winner`)

    
    rockButton.addEventListener(`click`, () => playRound(`rock`, getComputerChoice()))
    paperButton.addEventListener(`click`, () => playRound(`paper`, getComputerChoice()))
    scissorsButton.addEventListener(`click`, () => playRound(`scissors`, getComputerChoice()))

        
}

playGame()
