import React from 'react';
import './Board.sass';

const Board = ({ size, users, activeUser }) => {
    const [board, setBoard] = React.useState(Array(size).fill(Array(size).fill(null)));
    const [countSteps, setCountSteps] = React.useState(0);

    const handleClick = (e) => {
        const x = e.target.getAttribute('data-x');
        const y = e.target.getAttribute('data-y');

        if (board[y][x]) {
            return false;
        }

        const newBoard = JSON.parse(JSON.stringify(board));

        newBoard[y][x] = countSteps % 2 === 0 ? 'X' : '0';
        setBoard(newBoard);
        setCountSteps(countSteps + 1);

        const winner = checkWin(x, y, newBoard);
        // console.log(winner);
        if (winner) {
            setTimeout(() => {
                alert('Победил ' + winner);
                restart();
            }, 100);
        }

        if (size * size - 1 === countSteps && !winner) {
            setTimeout(() => {
                alert('Ничья');
                restart();
            }, 100);
        }
    };

    const restart = () => {
        setBoard(Array(size).fill(Array(size).fill(null)));
        setCountSteps(0);
    };

    const checkWin = (x, y, board) => {
        const winner = board[y][x];
        const boardSize = board.length;

        let isWinX = true;
        let isWinY = true;
        let isWinDiagTop = true;
        let isWinDiagBottom = true;

        for (let i = 0; i < boardSize; i++) {
            if (isWinX || isWinY || isWinDiagTop || isWinDiagBottom) {
                isWinX = isWinX && board[y][i] === winner;
                isWinY = isWinY && board[i][x] === winner;
                isWinDiagTop = isWinDiagTop && board[i][i] === winner;
                isWinDiagBottom = isWinDiagBottom && board[boardSize - 1 - i][i] === winner;
            } else {
                break;
            }
        }
        if (isWinX || isWinY || isWinDiagTop || isWinDiagBottom) {
            return winner;
        } else {
            return false;
        }
    };

    const boardSet = board.map((line, yIndex) => (
        <div className="board__row" key={yIndex}>
            {line.map((item, xIndex) => (
                <div
                    className="square"
                    key={xIndex + '_' + yIndex}
                    data-x={xIndex}
                    data-y={yIndex}
                    onClick={handleClick}>
                    {item}
                </div>
            ))}
        </div>
    ));

    return (
        <div className="game">
            <div className="board-wrap">
                <div className="board">{boardSet}</div>
            </div>

            <button className="restart-btn" onClick={restart}>
                Начать заново
            </button>
        </div>
    );
};

export default Board;
