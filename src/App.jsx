import { useState } from 'react';
import Player from './components/player';
import GameBoard from './components/game-board';
import Log from './components/log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/game-over';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
function deriveActivePlayer(gameTurns) {
	let currentPlayer = 'X';
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O';
	}
	return currentPlayer;
}
function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);
	let gameBoard = initialGameBoard;
	for (const turn of gameTurns) {
		const { player, square } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	let winner = null;
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = firstSquareSymbol;
		}
	}
	const hasDraw = gameTurns.length == 9 && !winner;
	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);
			const updatedTurns = [
				{
					player: currentPlayer,
					square: { row: rowIndex, col: colIndex },
				},
				...prevTurns,
			];
			return updatedTurns;
		});
	}
	function handleRestart() {
		setGameTurns([]);
	}
	return (
		<main>
			<div id="game-container">
				<ol
					id="players"
					className="highlight-player">
					<Player
						name="Player 1"
						symbol="X"
						isActive={activePlayer === 'X'}
					/>
					<Player
						name="Player 2"
						symbol="O"
						isActive={activePlayer === 'O'}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver
						winner={winner}
						onRestart={handleRestart}
					/>
				)}
				<GameBoard
					onSelectSquare={handleSelectSquare}
					board={gameBoard}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
