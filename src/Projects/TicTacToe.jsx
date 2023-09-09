import React, { useState, useEffect } from 'react';
import style from './style';

function Tictactoe() {
  const [turn, setTurn] = useState(false);
  const [array, setArray] = useState(['', '', '', '', '', '', '', '', '']);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinner();
  }, [array]);

  const checkWinner = () => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        setWinner(array[a]);
        return;
      }
    }

    // Check for a draw
    if (!array.includes('')) {
      setWinner('Draw');
    }
  };

  const handleClick = (index) => {
    if (array[index] === '' && winner === null) {
      const newArray = [...array];
      newArray[index] = turn ? 'X' : 'O';
      setArray(newArray);
      setTurn(!turn);
    }
  };
  const resetGame = () => {
    setArray(['', '', '', '', '', '', '', '', '']);
    setWinner(null);
    setTurn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe game!</h1>

        {winner ? (
          <div>
          <h2>Game Over! {winner === 'Draw' ? 'It\'s a Draw' : `Player ${winner} wins!`}</h2>
          <button onClick={resetGame}>Restart Game</button>
          </div>
        ) : (
          <div>
            <h2>{turn ? 'Player X\'s Turn' : 'Player O\'s Turn'}</h2>
            <div>
              <div className='row'>
                <div className='cellNE' onClick={() => handleClick(0)}>{array[0]}</div>
                <div className='cellN' onClick={() => handleClick(1)}>{array[1]}</div>
                <div className='cellNW' onClick={() => handleClick(2)}>{array[2]}</div>
              </div>
              <div className='row'>
                <div className='cellE' onClick={() => handleClick(3)}>{array[3]}</div>
                <div className='cellC' onClick={() => handleClick(4)}>{array[4]}</div>
                <div className='cellW' onClick={() => handleClick(5)}>{array[5]}</div>
              </div>
              <div className='row'>
                <div className='cellSE' onClick={() => handleClick(6)}>{array[6]}</div>
                <div className='cellS' onClick={() => handleClick(7)}>{array[7]}</div>
                <div className='cellSW' onClick={() => handleClick(8)}>{array[8]}</div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Tictactoe;