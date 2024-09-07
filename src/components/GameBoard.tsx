import React from 'react';
import { IGameTurns } from '../gameTurns.model';
interface GameBoardProps {
	onSelectedSquare: (colIndex: number, rowIndex: number) => void;
	gameBoard: (null | IGameTurns['player'])[][];
}

const GameBoard: React.FC<GameBoardProps> = ({
	gameBoard,
	onSelectedSquare,
}) => {
	return (
		<ol id='game-board'>
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li>
								<button
									key={colIndex}
									onClick={(): void =>
										onSelectedSquare(rowIndex, colIndex)
									}
									disabled={!!playerSymbol}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};

export default GameBoard;
