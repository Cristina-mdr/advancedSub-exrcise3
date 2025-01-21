//Cristina-Modritski-212099600-Ido-Lapidot-211673306
import React, { useState } from "react";
import "./App.css";

const X_IMAGE = "xImage.png";
const O_IMAGE = "oImage.png";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return board.every((cell) => cell) ? "Draw" : null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
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
      {winner && (
        <div className="result">
          <h2>{winner === "Draw" ? `!זה תיקו` : `! מנצח ${winner}`}</h2>
          <button onClick={restartGame}>שחק שוב</button>
        </div>
      )}
    </div>
  );
};

export default App;
