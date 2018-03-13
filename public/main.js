// As a user I should be able to see three buttons for each player
// as a user, I should be able to pick an option for each player

let playerOneSelection = "no selection";

const playerOneSelectsRock = () => {
  document.querySelector('#playerOneRock').style.backgroundColor = "lightblue";
  console.log("rock")
  playerOneSelection = "rock";
  gameOver()
}

const playerOneSelectsPaper = () => {
  document.querySelector('#playerOnePaper').style.backgroundColor = "lightblue";
  playerOneSelection = "paper";
  gameOver()
}

const playerOneSelectsScissors = () => {
  document.querySelector('#playerOneScissors').style.backgroundColor = "lightblue";
  playerOneSelection = "scissors";
  gameOver()
}


let playerTwoSelection = "no selection";

const playerTwoSelectsRock = () => {
  document.querySelector('#playerTwoRock').style.backgroundColor = "lightgreen";
  playerTwoSelection = "rock";
  gameOver()
}

const playerTwoSelectsPaper = () => {
  document.querySelector('#playerTwoPaper').style.backgroundColor = "lightgreen";
  playerTwoSelection = "paper";
  gameOver()
}

const playerTwoSelectsScissors = () => {
  document.querySelector('#playerTwoScissors').style.backgroundColor = "lightgreen";
  playerTwoSelection = "scissors";
  gameOver()
}

// As a user,after each player makes their selection, I should be told who won and the game should be over


const gameOver = () => {
  if ((playerOneSelection === "rock" || playerOneSelection === "paper" || playerOneSelection === "scissors") && (playerTwoSelection === "rock" || playerTwoSelection === "paper" || playerTwoSelection === "scissors")) {
    console.log("Players have made selections")
    winnerAlert()
    }
  }

  const winnerAlert = () => {
    //when one button from each player is selcted
    // when gameOver occurs, winnerAlert should start.
    if (playerOneSelection === "rock" && playerTwoSelection === "scissors") {
      console.log("Player One Wins!")
      alert("Player One Wins!")
    } else if (playerOneSelection === "paper" && playerTwoSelection === "rock") {
      console.log("Player One Wins!")
      alert("Player One Wins!")
    } else if (playerOneSelection === "scissors" && playerTwoSelection === "paper") {
      console.log("Player One Wins!")
      alert("Player One Wins!")
    } else if (playerTwoSelection === "rock" && playerOneSelection === "scissors") {
      console.log("Player Two Wins!")
      alert("Player Two Wins!")
    } else if (playerTwoSelection === "paper" && playerOneSelection === "rock") {
      alert("Player Two Wins!")
    } else if (playerTwoSelection === "scissors" && playerOneSelection === "paper") {
      alert("Player Two Wins!")
    } else {
      alert("It's a tie!")
    }
  }