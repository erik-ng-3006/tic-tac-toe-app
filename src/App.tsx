import GameBoard from './components/GameBoard';
import Log from './components/Log';
import Player from './components/Player';
import { useState } from 'react';
import { IGameTurns } from './gameTurns.model';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const PLAYERS: Record<IGameTurns['player'], string> = {
	X: 'Player 1',
	O: 'Player 2',
};
const INITIAL_GAME_BOARD: (null | IGameTurns['player'])[][] = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
const deriveActivePlayer = (gameTurns: IGameTurns[]): IGameTurns['player'] => {
	let currPlayer: IGameTurns['player'] = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currPlayer = 'O';
	}
	return currPlayer;
};

const App: React.FC = (): JSX.Element => {
	const [gameTurns, setGameTurns] = useState<IGameTurns[]>([]);

	const [players, setPlayers] =
		useState<Record<IGameTurns['player'], string>>(PLAYERS);
	const activePlayer = deriveActivePlayer(gameTurns);

	const gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];

	// add the current player's symbol to the game board
	for (const turn of gameTurns) {
		const [colIndex, rowIndex] = [turn.square.col, turn.square.row];
		gameBoard[colIndex][rowIndex] = turn.player;
	}

	let winner: string | null = null;

	// check if there is a winner
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
			winner = players[firstSquareSymbol];
			break;
		}
	}

	const handlePlayerNameChange = (symbol: 'X' | 'O', newName: string) => {
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName,
			};
		});
	};

	const selectedSquareHandler = (
		colIndex: number,
		rowIndex: number
	): void => {
		setGameTurns((prevGameTurns): IGameTurns[] => {
			const currPlayer = deriveActivePlayer(prevGameTurns);

			return [
				{
					square: { col: colIndex, row: rowIndex },
					player: currPlayer,
				},
				...prevGameTurns,
			];
		});
	};

	const hasDrawn = gameTurns.length === 9 && !winner;

	const handleRestart = (): void => {
		setGameTurns([]);
	};

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						initialName={PLAYERS.X}
						symbol='X'
						isActive={activePlayer === 'X'}
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol='O'
						isActive={activePlayer === 'O'}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDrawn) && (
					<GameOver winner={winner} onRestart={handleRestart} />
				)}
				<GameBoard
					gameBoard={gameBoard}
					onSelectedSquare={selectedSquareHandler}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
};

export default App;
