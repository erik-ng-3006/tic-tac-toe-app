import { IGameTurns } from '../gameTurns.model';
const Log: React.FC<{ turns: IGameTurns[] }> = ({ turns }) => {
	return (
		<ol id='log'>
			{turns.map((turn) => (
				<li key={`${turn.square.col}-${turn.square.row}`}>
					{turn.player} selected {turn.square.col}, {turn.square.row}
				</li>
			))}
		</ol>
	);
};

export default Log;
