import { useState } from 'react';
export default function Player({ name, symbol, isActive }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setplayerName] = useState(name);
	let ediatblePlayerName = <span className="player-name">{playerName}</span>;
	if (isEditing) {
		ediatblePlayerName = (
			<input
				type="text"
				required
				value={playerName}
				onChange={handleChange}
			/>
		);
	}
	function handleEditClick() {
		setIsEditing((editing) => !editing);
	}
	function handleChange(event) {
		setplayerName(event.target.value);
	}
	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{ediatblePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
