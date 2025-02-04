//original script
const multiPlayer = document.getElementById("multiPlayer");
const singlePlayer = document.getElementById("singlePlayer");

const gameBtns = document.querySelector(".gameBtns");
const header = document.getElementById("header");

multiPlayer.addEventListener("click", () => {
  let arr = [];
  let drawArr = [];

  document.body.removeChild(gameBtns);
  const pageCont = document.createElement("div");
  pageCont.classList.add("pageContainer");
  const gameScore = document.createElement("div");
  gameScore.id = "gameScore";
  const xScore = document.createElement("div");
  xScore.classList.add("score");
  const xName = document.createElement("div");
  xName.textContent = "X's:";
  const xNum = document.createElement("div");
  xNum.id = "xScore";
  const oScore = document.createElement("div");
  oScore.classList.add("score");
  const oName = document.createElement("div");
  oName.textContent = "O's:";
  const oNum = document.createElement("div");
  oNum.id = "oScore";

  xNum.textContent = "0";
  let currentXScore = Number(xNum.innerText);
  oNum.textContent = "0";
  let currentOScore = Number(oNum.innerText);

  const gameCont = document.createElement("div");
  gameCont.id = "gameContainer";

  const restartBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const multiPlayerGameBtns = document.createElement("div");
  multiPlayerGameBtns.classList.add("multiPlayerGameBtns");

  xScore.appendChild(xName);
  xScore.appendChild(xNum);
  oScore.appendChild(oName);
  oScore.appendChild(oNum);
  gameScore.appendChild(xScore);
  gameScore.appendChild(oScore);

  pageCont.appendChild(gameScore);

  let count = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      count += 1;
      const gameCells = document.createElement("div");
      gameCells.classList.add("cell");
      gameCells.id = "num" + count;

      gameCont.appendChild(gameCells);
    }
  }
  pageCont.appendChild(gameCont);

  restartBtn.id = "myBtn";
  restartBtn.textContent = "Restart Game";
  backBtn.id = "backBtn";
  backBtn.textContent = "Back";
  multiPlayerGameBtns.appendChild(backBtn);
  multiPlayerGameBtns.appendChild(restartBtn);

  pageCont.appendChild(multiPlayerGameBtns);

  document.body.appendChild(pageCont);

  backBtn.addEventListener("click", () => {
    document.body.removeChild(pageCont);

    document.body.appendChild(gameBtns);
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
      if (cell.textContent !== "") {
        cell.textContent = "";
        arr = [];
        drawArr = [];
      }
    });
  });

  restartBtn.addEventListener("mouseover", () => {
    restartBtn.classList.add("focused");
  });
  restartBtn.addEventListener("mouseout", () => {
    restartBtn.classList.remove("focused");
    restartBtn.classList.remove("clicked");
  });

  restartBtn.addEventListener("click", () => {
    if (restartBtn.classList.contains("focused")) {
      restartBtn.classList.add("clicked");
    }
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
      if (cell.textContent !== "") {
        cell.textContent = "";
        arr = [];
        drawArr = [];
      }
    });
  });

  function playGame() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((element) => {
      element.addEventListener("click", () => {
        if (!arr.includes(element)) {
          arr.push(element);
        }

        if (
          arr.length == 1 ||
          arr.length == 3 ||
          arr.length == 5 ||
          arr.length == 7 ||
          arr.length == 9
        ) {
          element.textContent = "X";
          drawArr.push(element.textContent);
          element.style.color = "rgb(84, 84, 84)";
          element.style.fontSize = "70px";

          if (
            (num1.innerHTML === "X" &&
              num2.innerHTML === "X" &&
              num3.innerHTML === "X") ||
            (num4.innerHTML === "X" &&
              num5.innerHTML === "X" &&
              num6.innerHTML === "X") ||
            (num7.innerHTML === "X" &&
              num8.innerHTML === "X" &&
              num9.innerHTML === "X") ||
            (num1.innerHTML === "X" &&
              num4.innerHTML === "X" &&
              num7.innerHTML === "X") ||
            (num2.innerHTML === "X" &&
              num5.innerHTML === "X" &&
              num8.innerHTML === "X") ||
            (num3.innerHTML === "X" &&
              num6.innerHTML === "X" &&
              num9.innerHTML === "X") ||
            (num1.innerHTML === "X" &&
              num5.innerHTML === "X" &&
              num9.innerHTML === "X") ||
            (num3.innerHTML === "X" &&
              num5.innerHTML === "X" &&
              num7.innerHTML === "X")
          ) {
            alertWinner1();
          }
        } else {
          element.innerHTML = "O";
          drawArr.push(element.textContent);
          element.style.color = "#e8e8e8";
          element.style.fontSize = "70px";
          if (
            (num1.innerHTML === "O" &&
              num2.innerHTML === "O" &&
              num3.innerHTML === "O") ||
            (num4.innerHTML === "O" &&
              num5.innerHTML === "O" &&
              num6.innerHTML === "O") ||
            (num7.innerHTML === "O" &&
              num8.innerHTML === "O" &&
              num9.innerHTML === "O") ||
            (num1.innerHTML === "O" &&
              num4.innerHTML === "O" &&
              num7.innerHTML === "O") ||
            (num2.innerHTML === "O" &&
              num5.innerHTML === "O" &&
              num8.innerHTML === "O") ||
            (num3.innerHTML === "O" &&
              num6.innerHTML === "O" &&
              num9.innerHTML === "O") ||
            (num1.innerHTML === "O" &&
              num5.innerHTML === "O" &&
              num9.innerHTML === "O") ||
            (num3.innerHTML === "O" &&
              num5.innerHTML === "O" &&
              num7.innerHTML === "O")
          ) {
            alertWinner2();
          }
        }

        if (drawArr.length == 9) {
          alertDraw();
        }
      });
    });
  }

  function alertWinner1() {
    document.body.removeChild(header);
    document.body.removeChild(pageCont);

    const winnerMessageX = document.createElement("div");
    winnerMessageX.classList.add("scale");
    winnerMessageX.textContent = "WINNER!";
    winnerMessageX.classList.add("winnerMessageX");
    const xWinner = document.createElement("img");
    xWinner.setAttribute("src", "x-symbol.png");
    xWinner.style.cursor = "pointer";
    xWinner.classList.add("slideIn");

    document.body.appendChild(xWinner);
    document.body.appendChild(winnerMessageX);

    xWinner.addEventListener("click", () => {
      document.body.removeChild(xWinner);
      document.body.removeChild(winnerMessageX);

      document.body.appendChild(header);
      document.body.appendChild(pageCont);

      const cells = document.querySelectorAll(".cell");

      cells.forEach((cell) => {
        if (cell.textContent !== "") {
          cell.textContent = "";
          arr = [];
          drawArr = [];
        }
      });
    });
    currentXScore += 1;

    xNum.textContent = currentXScore;
  }

  function alertWinner2() {
    document.body.removeChild(header);
    document.body.removeChild(pageCont);

    const winnerMessageO = document.createElement("div");
    winnerMessageO.classList.add("scale");
    winnerMessageO.textContent = "WINNER!";
    winnerMessageO.classList.add("winnerMessageO");
    const oWinner = document.createElement("img");
    oWinner.setAttribute("src", "o-symbol.png");
    oWinner.style.cursor = "pointer";
    oWinner.classList.add("slideIn");

    document.body.appendChild(oWinner);
    document.body.appendChild(winnerMessageO);

    oWinner.addEventListener("click", () => {
      document.body.removeChild(oWinner);
      document.body.removeChild(winnerMessageO);

      document.body.appendChild(header);
      document.body.appendChild(pageCont);
      const cells = document.querySelectorAll(".cell");

      cells.forEach((cell) => {
        if (cell.textContent !== "") {
          cell.textContent = "";
          arr = [];
          drawArr = [];
        }
      });
    });
    currentOScore += 1;

    oNum.textContent = currentOScore;
  }

  function alertDraw() {
    document.body.removeChild(header);
    document.body.removeChild(pageCont);

    const drawMessage = document.createElement("div");
    drawMessage.classList.add("scale");
    drawMessage.textContent = "DRAW!";
    drawMessage.classList.add("drawMessage");
    const drawBoard = document.createElement("div");
    const drawIconX = document.createElement("img");
    const drawIconO = document.createElement("img");
    drawIconO.setAttribute("src", "o-symbol.png");
    drawIconX.setAttribute("src", "x-symbol.png");

    drawBoard.style.cursor = "pointer";
    drawBoard.classList.add("slideIn");

    drawBoard.appendChild(drawIconX);
    drawBoard.appendChild(drawIconO);

    document.body.appendChild(drawBoard);
    document.body.appendChild(drawMessage);

    drawBoard.addEventListener("click", () => {
      document.body.removeChild(drawBoard);
      document.body.removeChild(drawMessage);

      document.body.appendChild(header);
      document.body.appendChild(pageCont);
      const cells = document.querySelectorAll(".cell");

      cells.forEach((cell) => {
        if (cell.textContent !== "") {
          cell.textContent = "";
          arr = [];
          drawArr = [];
        }
      });
    });
  }

  playGame();
});

singlePlayer.addEventListener("click", () => {
  let arr = [];
  let drawArr = [];
  let choiceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  document.body.removeChild(gameBtns);
  const pageCont = document.createElement("div");
  pageCont.classList.add("pageContainer");
  const gameScore = document.createElement("div");
  gameScore.id = "gameScore";
  const xScore = document.createElement("div");
  xScore.classList.add("score");
  const xName = document.createElement("div");
  xName.textContent = "X's:";
  const xNum = document.createElement("div");
  xNum.id = "xScore";
  const oScore = document.createElement("div");
  oScore.classList.add("score");
  const oName = document.createElement("div");
  oName.textContent = "O's:";
  const oNum = document.createElement("div");
  oNum.id = "oScore";

  xNum.textContent = "0";
  let currentXScore = Number(xNum.innerText);
  oNum.textContent = "0";
  let currentOScore = Number(oNum.innerText);

  const gameCont = document.createElement("div");
  gameCont.id = "gameContainer";

  const restartBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const multiPlayerGameBtns = document.createElement("div");
  multiPlayerGameBtns.classList.add("multiPlayerGameBtns");

  xScore.appendChild(xName);
  xScore.appendChild(xNum);
  oScore.appendChild(oName);
  oScore.appendChild(oNum);
  gameScore.appendChild(xScore);
  gameScore.appendChild(oScore);

  pageCont.appendChild(gameScore);

  let count = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      count += 1;
      const gameCells = document.createElement("div");
      gameCells.classList.add("cell");
      gameCells.classList.add(count);
      gameCells.id = "num" + count;

      gameCont.appendChild(gameCells);
    }
  }
  pageCont.appendChild(gameCont);

  restartBtn.id = "myBtn";
  restartBtn.textContent = "Restart Game";
  backBtn.id = "backBtn";
  backBtn.textContent = "Back";
  multiPlayerGameBtns.appendChild(backBtn);
  multiPlayerGameBtns.appendChild(restartBtn);

  pageCont.appendChild(multiPlayerGameBtns);

  document.body.appendChild(pageCont);

  backBtn.addEventListener("click", () => {
    document.body.removeChild(pageCont);

    document.body.appendChild(gameBtns);
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
      if (cell.textContent !== "") {
        cell.textContent = "";
        arr = [];
        drawArr = [];
      }
    });
  });

  restartBtn.addEventListener("mouseover", () => {
    restartBtn.classList.add("focused");
  });
  restartBtn.addEventListener("mouseout", () => {
    restartBtn.classList.remove("focused");
    restartBtn.classList.remove("clicked");
  });

  restartBtn.addEventListener("click", () => {
    if (restartBtn.classList.contains("focused")) {
      restartBtn.classList.add("clicked");
    }
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
      if (cell.textContent !== "") {
        cell.textContent = "";
        arr = [];
        drawArr = [];
      }
    });
  });

  function playGame() {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((element) => {
      element.addEventListener("click", () => {
        if (!arr.includes(element)) {
          arr.push(element);
        }

        if (
          arr.length == 1 ||
          arr.length == 3 ||
          arr.length == 5 ||
          arr.length == 7 ||
          arr.length == 9
        ) {
          element.textContent = "X";
          drawArr.push(element.textContent);
          element.style.color = "rgb(84, 84, 84)";
          element.style.fontSize = "70px";

          if (
            (num1.innerHTML === "X" &&
              num2.innerHTML === "X" &&
              num3.innerHTML === "X") ||
            (num4.innerHTML === "X" &&
              num5.innerHTML === "X" &&
              num6.innerHTML === "X") ||
            (num7.innerHTML === "X" &&
              num8.innerHTML === "X" &&
              num9.innerHTML === "X") ||
            (num1.innerHTML === "X" &&
              num4.innerHTML === "X" &&
              num7.innerHTML === "X") ||
            (num2.innerHTML === "X" &&
              num5.innerHTML === "X" &&
              num8.innerHTML === "X") ||
            (num3.innerHTML === "X" &&
              num6.innerHTML === "X" &&
              num9.innerHTML === "X") ||
            (num1.innerHTML === "X" &&
              num5.innerHTML === "X" &&
              num9.innerHTML === "X") ||
            (num3.innerHTML === "X" &&
              num5.innerHTML === "X" &&
              num7.innerHTML === "X")
          ) {
            alertWinner1();
          }
        }

        if (drawArr.length == 9) {
          alertDraw();
        }

        choiceArr.splice(choiceArr.indexOf(Number(element.classList[1])), 1);
        compMove();
      });
    });
  }

  function compMove() {
    const cells = document.querySelectorAll(".cell");
    let compChoice = choiceArr[Math.ceil(Math.random() * choiceArr.length - 1)];



    cells.forEach((cell) => {
      if (compChoice == Number(cell.classList[1])) {
        if (cell.textContent == "") {
          cell.textContent = "O";
          arr.push(cell);
          drawArr.push(cell.textContent);
          cell.style.color = "rgb(84, 84, 84)";
          cell.style.fontSize = "70px";
        }
      }
      if (
        (num1.innerHTML === "O" &&
          num2.innerHTML === "O" &&
          num3.innerHTML === "O") ||
        (num4.innerHTML === "O" &&
          num5.innerHTML === "O" &&
          num6.innerHTML === "O") ||
        (num7.innerHTML === "O" &&
          num8.innerHTML === "O" &&
          num9.innerHTML === "O") ||
        (num1.innerHTML === "O" &&
          num4.innerHTML === "O" &&
          num7.innerHTML === "O") ||
        (num2.innerHTML === "O" &&
          num5.innerHTML === "O" &&
          num8.innerHTML === "O") ||
        (num3.innerHTML === "O" &&
          num6.innerHTML === "O" &&
          num9.innerHTML === "O") ||
        (num1.innerHTML === "O" &&
          num5.innerHTML === "O" &&
          num9.innerHTML === "O") ||
        (num3.innerHTML === "O" &&
          num5.innerHTML === "O" &&
          num7.innerHTML === "O")
      ) {
        alertWinner2();
      }
    });
    choiceArr.splice(choiceArr.indexOf(compChoice), 1);


  }

  function alertWinner1() {
    document.body.removeChild(header);
    document.body.removeChild(pageCont);

    const winnerMessageX = document.createElement("div");
    winnerMessageX.classList.add("scale");
    winnerMessageX.textContent = "WINNER!";
    winnerMessageX.classList.add("winnerMessageX");
    const xWinner = document.createElement("img");
    xWinner.setAttribute("src", "x-symbol.png");
    xWinner.style.cursor = "pointer";
    xWinner.classList.add("slideIn");

    document.body.appendChild(xWinner);
    document.body.appendChild(winnerMessageX);

    xWinner.addEventListener("click", () => {
      document.body.removeChild(xWinner);
      document.body.removeChild(winnerMessageX);

      document.body.appendChild(header);
      document.body.appendChild(pageCont);

      const cells = document.querySelectorAll(".cell");

      cells.forEach((cell) => {
        if (cell.textContent !== "") {
          cell.textContent = "";
          arr = [];
          drawArr = [];
          choiceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
      });
    });
    currentXScore += 1;

    xNum.textContent = currentXScore;
  }

  function alertWinner2() {
    document.body.removeChild(header);
    document.body.removeChild(pageCont);

    const winnerMessageO = document.createElement("div");
    winnerMessageO.classList.add("scale");
    winnerMessageO.textContent = "WINNER!";
    winnerMessageO.classList.add("winnerMessageO");
    const oWinner = document.createElement("img");
    oWinner.setAttribute("src", "o-symbol.png");
    oWinner.style.cursor = "pointer";
    oWinner.classList.add("slideIn");

    document.body.appendChild(oWinner);
    document.body.appendChild(winnerMessageO);

    oWinner.addEventListener("click", () => {
      document.body.removeChild(oWinner);
      document.body.removeChild(winnerMessageO);

      document.body.appendChild(header);
      document.body.appendChild(pageCont);
      const cells = document.querySelectorAll(".cell");

      cells.forEach((cell) => {
        if (cell.textContent !== "") {
          cell.textContent = "";
          arr = [];
          drawArr = [];
          choiceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
      });
    });
    currentOScore += 1;

    oNum.textContent = currentOScore;
  }

  function alertDraw() {
    document.body.removeChild(header);
    document.body.removeChild(pageCont);

    const drawMessage = document.createElement("div");
    drawMessage.classList.add("scale");
    drawMessage.textContent = "DRAW!";
    drawMessage.classList.add("drawMessage");
    const drawBoard = document.createElement("div");
    const drawIconX = document.createElement("img");
    const drawIconO = document.createElement("img");
    drawIconO.setAttribute("src", "o-symbol.png");
    drawIconX.setAttribute("src", "x-symbol.png");

    drawBoard.style.cursor = "pointer";
    drawBoard.classList.add("slideIn");

    drawBoard.appendChild(drawIconX);
    drawBoard.appendChild(drawIconO);

    document.body.appendChild(drawBoard);
    document.body.appendChild(drawMessage);

    drawBoard.addEventListener("click", () => {
      document.body.removeChild(drawBoard);
      document.body.removeChild(drawMessage);

      document.body.appendChild(header);
      document.body.appendChild(pageCont);
      const cells = document.querySelectorAll(".cell");

      cells.forEach((cell) => {
        if (cell.textContent !== "") {
          cell.textContent = "";
          arr = [];
          drawArr = [];
          choiceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
      });
    });
  }

  playGame();
});
