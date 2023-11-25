import { useState } from 'react';
const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
	let gameBoard = initialGameBoard;
	for (const turn of turns) {
		const { player, square } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, columnIndex) => (
							<li key={columnIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, columnIndex)}
									disabled={playerSymbol !== null}>
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
