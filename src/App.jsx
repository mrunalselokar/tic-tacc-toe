import { useState } from 'react';
import Player from './components/player';
import GameBoard from './components/game-board';
import Log from './components/log';
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
	return (
		<main>
			<div id="game-container">
				<ol
					id="players"
					className="hightlight-player">
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
				<GameBoard
					onSelectSquare={handleSelectSquare}
					turns={gameTurns}
				/>
				<Log turns={gameTurns} />
			</div>
		</main>
	);
}

export default App;
