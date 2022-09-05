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
     write ("It'a tie", "Rock ties with rock" )
     changeImage("./images/rockkk3.jpg", "./images/rockkk3.jpg")
     }
   
   if (
    playerSelection === 'ROCK' && computerSelection === 'SCISSORS') { 
      write ("You won ", "Rock is beaten by scissors" )
      changeImage("./images/rockkk3.jpg", "./images/scissors.png")
      playerScore++
     if (checkScore (playerScore)) {
         console.log('Player is winner')
        }
        document.getElementById('player-score').innerHTML = `Player Score: ${playerScore}`
    }
   if (
    playerSelection === 'ROCK' && computerSelection === 'PAPER') { 
         write ("You lost ", "Paper is beaten by rock")
        changeImage("./images/rockkk3.jpg", "./images/paper.png")
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
       write(" It's a tie", "Scissors ties with scissors")
       changeImage("./images/scissors.png","./images/scissors.png" )
       }
    if (
     playerSelection === 'SCISSORS' && computerSelection === 'ROCK') { 
        write("You lost ","Scissors are beaten by rock" )
        changeImage("./images/scissors.png", "./images/rockkk3.jpg" )
       
        computerScore++
        if (checkScore (computerScore)) {
            console.log('Computer is winner')
        }
        document.getElementById('computer-score').innerHTML = `Computer Score: ${computerScore}`
       }
    
    if (
     playerSelection === 'SCISSORS' && computerSelection === 'PAPER') { 
        write ("You won ", "Paper is beaten by scissors")
        changeImage("./images/scissors.png", "./images/paper.png")
        
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
       write ("It's a tie","Paper ties with paper" )
       changeImage("./images/paper.png", "./images/paper.png")
       
      }
      if (
       playerSelection === 'PAPER' && computerSelection === 'ROCK') { 
        write ("You won", "Rock is beaten by paper" )
        changeImage("./images/paper.png", "./images/rockkk3.jpg")
        playerScore++
        if (checkScore (playerScore)) {
            console.log('Player is winner')
        }
        document.getElementById('player-score').innerHTML = `Player Score: ${playerScore}`
       }
      if (
       playerSelection === 'PAPER' && computerSelection === 'SCISSORS') { 
      write("You lost ","Paper is beaten by scissors"   )
      changeImage("./images/paper.png", "./images/scissors.png")
      computerScore++
        if (checkScore (computerScore)) {
            console.log('Computer is winner')
        }
        document.getElementById('computer-score').innerHTML = `Computer Score: ${computerScore}`
       }
    })


function write (text1, text2) {
        document.getElementById("h1").innerHTML = text1;
        document.getElementById("p1").innerHTML = text2 ;
    }
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
        document.getElementById('is-winner').innerHTML = 'Oh no. You are a loser :(('
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
    write("Choose your weapon", "First to score 5 points wins the game")
    changeImage("./images/Question.png", "./images/Question.png" );
    })
}

function changeImage(image1, image2) {
    document.getElementById("image1").src= image1;
    document.getElementById("image2").src= image2;
}















/*
function calculator(a,b,operation){
    if(operation=="+") return a+b
    else if(operation=="-") return a-b
    else if(operation=="/") return a/b
    else if(operation="*") return a*b
}

// console.log(calculator(312321,2132,"-"));

let num = "324324"

num+=1
parseInt(num)

num+=2

console.log(num);
*/