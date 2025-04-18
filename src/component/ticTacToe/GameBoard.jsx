export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <ol key={rowIndex}>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button disabled={symbol !== null} onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        );
      })}
    </ol>
  );
}
