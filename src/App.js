import React, { useState } from "react";
import "./App.css";

const X_IMAGE = "xImage.png";
const O_IMAGE = "oImage.png";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (!(board[index] && winner)) {
      const newBoard = [...board];
      newBoard[index] = isXTurn ? "X" : "O";
      setBoard(newBoard);

      setIsXTurn(!isXTurn);
    }
  };

  return (
    <div className="App">
      <h1>איקס עיגול</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell === "X" && <img src={X_IMAGE} alt="X" />}
            {cell === "O" && <img src={O_IMAGE} alt="O" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
