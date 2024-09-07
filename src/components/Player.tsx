import { useState } from 'react';
import { IGameTurns } from '../gameTurns.model';
interface PlayerProps {
	initialName: string;
	symbol: IGameTurns['player'];
	isActive: boolean;
	onChangeName: (symbol: IGameTurns['player'], newName: string) => void;
}
const Player: React.FC<PlayerProps> = ({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) => {
	const [playerName, setPlayerName] = useState<string>(initialName);
	const [edit, setEdit] = useState<boolean>(false);

	const editHandler: React.MouseEventHandler<
		HTMLButtonElement
	> = (): void => {
		setEdit((prev) => !prev);

		if (edit) {
			onChangeName(symbol, playerName);
		}
	};

	return (
		<li className={isActive ? 'active' : ''}>
			<span className='player'>
				{!edit && <span className='player-name'>{playerName}</span>}
				{edit && (
					<input
						type='text'
						required
						value={playerName}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setPlayerName(e.target.value)
						}
					/>
				)}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={editHandler}>{!edit ? 'Edit' : 'Save'}</button>
		</li>
	);
};

export default Player;
