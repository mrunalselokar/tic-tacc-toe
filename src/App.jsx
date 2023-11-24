import { useState } from 'react';
import Player from './components/player';
import GameBoard from './components/game-board';
function App() {
	const [activePlayer, setActivePlayer] = useState('X');
	function handleSelectSquare() {
		setActivePlayer((currentActivePlayer) =>
			currentActivePlayer === 'X' ? 'O' : 'X'
		);
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player
						name="Player 1"
						symbol="X"
						isActive={activePlayer == 'X'}
					/>
					<Player
						name="Player 2"
						symbol="O"
						isActive={activePlayer == 'O'}
					/>
				</ol>
				<GameBoard
					onSelectSquare={handleSelectSquare}
					activePlayerSymbol={activePlayer}
				/>
			</div>
		</main>
	);
}

export default App;
