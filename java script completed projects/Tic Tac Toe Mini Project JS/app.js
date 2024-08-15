let currentPlayer = 'X';

let board = ['','','','','','','','','',]
let winingCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

const cells = document.querySelectorAll('.cell')
const resetButton = document.getElementById('resetButton')

cells.forEach((cell, index) => {
    cell.addEventListener('click', function () {
        if (board[index] === '') {
            board[index] = currentPlayer;
            cell.innerText = currentPlayer;

            for  (let i = 0; i < winingCombinations.length; i++) {
                const [a, b, c] = winingCombinations[i];
                if (board[a] && board[a] === board[b] && board[a] === board[c]){
                    setTimeout(() => {
                        alert(currentPlayer + " " + 'wins!');
                        resetGame();
                    }, 1000 );
                    return;
                }
            }

            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }
        }
    })
});

function resetGame() {
    board = ['','','','','','','','',''];

    cells.forEach(cell => {
        cell.innerText = '';
    });

    currentPlayer = 'X';
}

resetButton.addEventListener('click', function resetBtn() {
    resetGame()
})