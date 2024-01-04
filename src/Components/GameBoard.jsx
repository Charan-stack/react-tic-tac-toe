


export default function GameBoard({ onSelectSquare, board }){

    


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((preGameBoard) => {
    //         const updatedGameBoard = [...preGameBoard.map(innerArrays => [...innerArrays])]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;

    //     })
    //     onSelectSquare();

    //}
    return(
        <ol id="game-board">
            {
                board.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {
                            row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>)
                        }
                    </ol>
                </li>)
            }
        </ol>
    );
}
