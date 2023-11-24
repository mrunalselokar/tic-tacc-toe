import { useState } from 'react';
const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);
	function handleSelectSquare(rowIndex, colIndex) {
		setGameBoard((prevGameBoard) => {
			const newGameBoard = [
				...prevGameBoard.map((innerArray) => [...innerArray]),
			];
			newGameBoard[rowIndex][colIndex] = 'X';
			return newGameBoard;
		});
	}
	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, columnIndex) => (
							<li key={columnIndex}>
								<button
									onClick={() => handleSelectSquare(rowIndex, columnIndex)}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
