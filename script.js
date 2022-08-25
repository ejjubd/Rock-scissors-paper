let playerScore = 0;
let computerScore = 0;


function computerChoice () {
    let random = Math.floor(Math.random () * 3)
    switch (random) {
        case 0:
            return 'ROCK';
        case 1:
            return 'SCISSORS';
        case 2:
            return 'PAPER';

    }
}



const rock = document.querySelector('.rock')
rock.addEventListener ('click', function() {
   let computerSelection = computerChoice();
   let playerSelection = 'ROCK';
   if (playerSelection === computerSelection) {
     document.getElementById("h1").innerHTML = "It'a tie";
     document.getElementById("p1").innerHTML = "Rock ties with rock" ;
        
    }
   
   if (
    playerSelection === 'ROCK' && computerSelection === 'SCISSORS') { 
     document.getElementById("h1").innerHTML = "You won ";
     document.getElementById("p1").innerHTML = "Rock is beaten by scissors" ;
     playerScore++
     if (checkScore (playerScore)) {
         console.log('Player is winner')
        }
        document.getElementById('player-score').innerHTML = `Player Score: ${playerScore}`
    }
   if (
    playerSelection === 'ROCK' && computerSelection === 'PAPER') { 
     document.getElementById("h1").innerHTML = "You lose ";
     document.getElementById("p1").innerHTML = "Paper is beaten by rock" ;
        computerScore++
        if (checkScore (computerScore)) {
            console.log('Computer is winner')
        }
        document.getElementById('computer-score').innerHTML = `Computer Score: ${computerScore}`
    }
})




    const scissors = document.querySelector('.scissors')
   scissors.addEventListener ('click', function() {
    let computerSelection = computerChoice();
    let playerSelection = 'SCISSORS'
    if (playerSelection === computerSelection) {
        document.getElementById("h1").innerHTML = " It's a tie";
        document.getElementById("p1").innerHTML = "Scissors ties with scissors" ;
    }
    if (
     playerSelection === 'SCISSORS' && computerSelection === 'ROCK') { 
        document.getElementById("h1").innerHTML = "You lose ";
        document.getElementById("p1").innerHTML = "Scissors are beaten by rock" ;
        computerScore++
        if (checkScore (computerScore)) {
            console.log('Computer is winner')
        }
        document.getElementById('computer-score').innerHTML = `Computer Score: ${computerScore}`
       }
    
    if (
     playerSelection === 'SCISSORS' && computerSelection === 'PAPER') { 
        document.getElementById("h1").innerHTML = "You won ";
        document.getElementById("p1").innerHTML = "Paper is beaten by scissors" ;
        playerScore++
        if (checkScore (playerScore)) {
            console.log('Player is winner')
        }
        document.getElementById('player-score').innerHTML = `Player Score: ${playerScore}`
       }
  })

  const paper = document.querySelector('.paper')
  paper.addEventListener ('click', function() {
      let computerSelection = computerChoice();
      let playerSelection = 'PAPER'
      if (playerSelection === computerSelection) {
        document.getElementById("h1").innerHTML = " It's a tie";
        document.getElementById("p1").innerHTML = "Paper ties with paper" ;
      }
      if (
       playerSelection === 'PAPER' && computerSelection === 'ROCK') { 
        document.getElementById("h1").innerHTML = "You won";
        document.getElementById("p1").innerHTML = "Rock is beaten by paper" ;
        playerScore++
        if (checkScore (playerScore)) {
            console.log('Player is winner')
        }
        document.getElementById('player-score').innerHTML = `Player Score: ${playerScore}`
       }
      if (
       playerSelection === 'PAPER' && computerSelection === 'SCISSORS') { 
        document.getElementById("h1").innerHTML = "You lose ";
        document.getElementById("p1").innerHTML = "Paper is beaten by scissors" ;
        computerScore++
        if (checkScore (computerScore)) {
            console.log('Computer is winner')
        }
        document.getElementById('computer-score').innerHTML = `Computer Score: ${computerScore}`
       }
    })


function checkScore (score) {
    if (score === 5) {
        announceWinner();
        
        resetScore();
        return true
    }
    return false
}






function announceWinner () {
       document.getElementById('popup').style.display = 'block';
    if (computerScore === 5 ){
        document.getElementById('is-winner').innerHTML = 'You lost :((('
    }
    if ( playerScore === 5) {
        document.getElementById('is-winner').innerHTML = 'Winner Winner Chicken Dinner' 
    }
}

function resetScore () {
    const playAgain = document.querySelector('#play-again')
    playAgain.addEventListener('click', function () {
    computerScore=0
    playerScore=0
    document.getElementById('computer-score').innerHTML = `Computer Score: ${computerScore}`
    document.getElementById('player-score').innerHTML = `Player Score: ${playerScore}`
    document.getElementById('popup').style.display = 'none';
    })
}