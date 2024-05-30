const btn = document.querySelector(".myButton");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submitBtn");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const cells = document.getElementsByClassName("cell");
let arr = [];
const gameCells = document.querySelectorAll(".cell");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const grid = document.getElementById("gameContainer");
const warning = document.getElementById("warning");
const gameWarning = document.createTextNode(`To play, click new game and input names`);

if (player1Name.value === "" && player2Name.value === "" ||
   player1Name.value === "" || player2Name.value ==="") {
  grid.classList.add("disable");


  warning.style.color = "red"


  warning.appendChild(gameWarning);
  
}


submitBtn.addEventListener("click", () => {

  console.log(player1Name.value);
  console.log(player2Name.value);


  document.getElementById("form").style.display = "none";

  if (player1Name.value !== "" && player2Name.value !== "") {
    grid.classList.remove("disable");
    warning.removeChild(gameWarning);
  } else {
    grid.classList.add("disable");
    warning.appendChild(gameWarning);
  }
  
})


gameCells.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "lightyellow";
  })
  
});

gameCells.forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "";
  })

});



function playGame() {

  gameCells.forEach((element) => {

    element.addEventListener("click", () => {
      arr.push(element);
      console.log(arr);
      console.log(arr.length);

    

      if (arr.length == 1 || arr.length == 3 || arr.length == 5 || arr.length == 7 || arr.length == 9) {
        element.innerHTML = "X";
        console.log("x");
        if (one.innerHTML === "X" && two.innerHTML === "X" && three.innerHTML === "X" ||
          four.innerHTML === "X" && five.innerHTML === "X" && six.innerHTML === "X" ||
          seven.innerHTML === "X" && eight.innerHTML === "X" && nine.innerHTML === "X" ||
          one.innerHTML === "X" && four.innerHTML === "X" && seven.innerHTML === "X" ||
          two.innerHTML === "X" && five.innerHTML === "X" && eight.innerHTML === "X" ||
          three.innerHTML === "X" && six.innerHTML === "X" && nine.innerHTML === "X" ||
          one.innerHTML === "X" && five.innerHTML === "X" && nine.innerHTML === "X" ||
          three.innerHTML === "X" && five.innerHTML === "X" && seven.innerHTML === "X") {
          console.log("player 1 wins");
          alertWinner1();


        }
      } else {
        element.innerHTML = "O"
        console.log("o");
        if (one.innerHTML === "O" && two.innerHTML === "O" && three.innerHTML === "O" ||
          four.innerHTML === "O" && five.innerHTML === "O" && six.innerHTML === "O" ||
          seven.innerHTML === "O" && eight.innerHTML === "O" && nine.innerHTML === "O" ||
          one.innerHTML === "O" && four.innerHTML === "O" && seven.innerHTML === "O" ||
          two.innerHTML === "O" && five.innerHTML === "O" && eight.innerHTML === "O" ||
          three.innerHTML === "O" && six.innerHTML === "O" && nine.innerHTML === "O" ||
          one.innerHTML === "O" && five.innerHTML === "O" && nine.innerHTML === "O" ||
          three.innerHTML === "O" && five.innerHTML === "O" && seven.innerHTML === "O") {
          console.log('player 2 wins');
          alertWinner2();


        }
      }
    });

    
  })

}


function newGame() {
  document.getElementById("form").style.display = "block";


  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.getElementById("five").innerHTML = "";
  document.getElementById("six").innerHTML = "";
  document.getElementById("seven").innerHTML = "";
  document.getElementById("eight").innerHTML = "";
  document.getElementById("nine").innerHTML = "";

  player1Name.value = "";
  player2Name.value = "";
  arr = []
  console.log(arr)
}


function alertWinner1() {
  const gameCont = document.getElementById("container");
  const gameWinner = document.createTextNode(`${player1Name.value} is the winner`);
  const btn = document.getElementById("myBtn");

  gameCont.style.borderRadius = "15px";
  gameCont.style.border = "1px solid black";
  gameCont.style.padding = "25px"
  gameCont.style.backgroundColor = "#eec0c8"


  gameCont.appendChild(gameWinner);

  btn.addEventListener("click", () => {
    gameCont.removeChild(gameWinner);
    gameCont.style.borderRadius = "";
    gameCont.style.border = "";
    gameCont.style.padding = ""
    gameCont.style.backgroundColor = ""

  })


};

function alertWinner2() {
  const gameCont = document.getElementById("container");
  const gameWinner = document.createTextNode(`${player2Name.value} is the winner`);
  const btn = document.getElementById("myBtn");

  gameCont.style.borderRadius = "15px";
  gameCont.style.border = "1px solid black";
  gameCont.style.padding = "25px"
  gameCont.style.backgroundColor = "#eec0c8"


  gameCont.appendChild(gameWinner);

  btn.addEventListener("click", () => {
    gameCont.removeChild(gameWinner);
    gameCont.style.borderRadius = "";
    gameCont.style.border = "";
    gameCont.style.padding = ""
    gameCont.style.backgroundColor = ""

  })


};

playGame();
