import { useState, useEffect } from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";

const Gameboard = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [xWins, setXwins] = useState(()=>Number(localStorage.getItem("xWins")) ||0);
  const [oWins, setOwins] = useState(()=>Number(localStorage.getItem("oWins")) ||0);
  const [isXTurn, setIsXTurn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const getAvailableMoves = (board) => {
    return board.map((cell,index)=> (cell===null? index:null)).filter((cell)=>cell !==null);
  }

  const checkWinner = (board) => {
    for(let combo of winningCombos) {
      const [a,b,c] = combo;

      if(board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if(grid[index] || checkWinner(grid)) return;

    const newGrid = [...grid];
    newGrid[index] = isXTurn? "X" : "O";
    setGrid(newGrid);
    setIsXTurn(!isXTurn);
  };

  const restartGame = () => {
    setGrid(Array(9).fill(null));
    setIsXTurn(true);
    localStorage.setItem("xWins",0);
    localStorage.setItem("oWins",0);
    window.location.reload()
  }

  const winner = checkWinner(grid);

  useEffect(()=> {
    if(!isXTurn && location.state?.mode==="single player" && !checkWinner(grid)){
      const availableMoves = getAvailableMoves(grid);
      if(availableMoves.length>0) {
        setTimeout(()=> {
          const randomMove = availableMoves[Math.floor(Math.random()*availableMoves.length)];
          setGrid((prev)=> {
            const newGrid = [...prev];
            newGrid[randomMove] ="O";
            return newGrid;
          });
          setIsXTurn(true);
        }, 500);
      }
    }
  },[isXTurn,grid,location.state?.mode])

  useEffect(()=>{
    if(winner) {
      if(winner==="O") {
        setOwins(prev=>{
          const newOWins = prev+1;
          localStorage.setItem("oWins",newOWins);
          return newOWins;
        });
        navigate("/result",{state: {winner: "O"}});
      } else {
        setXwins(prev=>{
          const newXWins = prev+1;
          localStorage.setItem("xWins",newXWins);
          return newXWins;
        });
        navigate("/result",{state: {winner: "X"}});
      }
    }
  },[winner, navigate])


  return (
    <div className="pageContainer">
      <div id ="gameScore">
        <div className="score">
          <div>X's:</div>
          <div id="xScore">{xWins}</div>

          <div>O's:</div>
          <div id="oScore">{oWins}</div>
        </div>
      </div>
      <div id="gameContainer">
        {grid.map((cell, index) => {
          return (
            <div key={index} className="cell" id={`num${index}`} onClick = {()=> handleClick(index)}>
              {cell}
            </div>
          );
        })}
      </div>
      <button id="restartBtn" onClick={restartGame}>Restart</button>
      <Link to ="/"><button id="backBtn">Back</button></Link>
    </div>
  );
};

export default Gameboard;
