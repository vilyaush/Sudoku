const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const board = solve(boardString);

// Создаёт массив 9x9
function solve(boardString) {
  console.log('first changes');
  const board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    const row = boardString.slice(i, i + 9).split('');
    board.push(row);
  }
  return board;
}

// проверяет ячейку на наличие цифры и возвращает "координаты" пустой ячейки
const cellCheck = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == '-') return [i, j];
    }
  }
  return null;
};

// проверяет наличие цифр от 1 до 9 в ячейке. Если цифры нет, возвращает true.
const row = (board, r, i) => {
  if (board[r].indexOf(i.toString()) == -1) {
    return true;
  }
  return false;
};

const column = (board, c, i) => {
  let total = 0;
  for (let j = 0; j < board.length; j++) {
    if (Number(board[j][c]) == i) {
      total += 1;
    }
  }
  if (total < 1) {
    return true;
  }
  return false;
};
const square = (board, r, c, i) => {
  let total = 0;
  const r2 = Math.floor(r / 3) * 3;
  const c2 = Math.floor(c / 3) * 3;
  for (let j = r2; j < r2 + 3; j++) {
    for (let y = c2; y < c2 + 3; y++) {
      if (board[j][y] == i) total++;
    }
  }
  if (total < 1) {
    return true;
  }
  return false;
};

// заполняет ячейки
const cellFill = (board) => {
  const currPos = cellCheck(board);
  if (currPos === null) return true;
  const [r, c] = cellCheck(board);
  for (let i = 1; i <= 9; i++) {
    if (row(board, r, i) === true) {
      if (column(board, c, i) === true) {
        if (square(board, r, c, i) === true) {
          board[r][c] = i.toString();
          if (cellFill(board)) return board;
          board[r][c] = '-';
        }
      }
    }
  }
  return false;
};
const result = cellFill(board);
console.table(result);

// function isSolved(board) {
// }

// function prettyBoard(board) {
// }

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  // isSolved,
  // prettyBoard,
};
