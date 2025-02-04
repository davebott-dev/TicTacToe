import { useState, useEffect } from "react";

const Gameboard = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));

  return (
    <div className="pageContainer">
      <div id="gameContainer">
        {grid.map((cell, index) => {
          return (
            <div key={index} className="cell" id={`num${index}`}>
              {" "}
            </div>
          );
        })}
      </div>
      <button id="restartBtn">Restart</button>
      <button id="backBtn">Back</button>
    </div>
  );
};

export default Gameboard;
