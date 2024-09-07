import React from 'react';

interface IGameOverProps {
	winner: string | null;
	onRestart: () => void;
}
const GameOver: React.FC<IGameOverProps> = ({ winner, onRestart }) => {
	return (
		<div id='game-over'>
			<h2>Game Over!</h2>
			{winner && <p>{winner.toUpperCase()} won!</p>}
			{!winner && <p>It's a draw!</p>}
			<p>
				<button onClick={onRestart}>Rematch!</button>
			</p>
		</div>
	);
};

export default GameOver;
