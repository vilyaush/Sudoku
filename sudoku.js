//let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
let boardString = '---------------------------------------------------------------------------------'
let board = solve(boardString)

function solve(boardString) {

  console.log("first changes");
  let board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    let row = boardString.slice(i, i + 9).split("");
    board.push(row);
}
return board;
}
const cellCheck = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == '-') return [i, j];
    }
  }
  return null;
};
const row = (board, g, i) => {
  if (board[g].indexOf(i.toString()) == -1) {
    return true;
  }
  return false;
};
const column = (board, v, i) => {
  let total = 0;
  for (let j = 0; j < board.length; j++) {
    if (Number(board[j][v]) == i) {
      total += 1;
    }
  }
  if (total < 1) {
    return true;
  }
  return false;
};
const square = (board, g, v, i) => {
  let total = 0;
  const g2 = Math.floor(g / 3) * 3;
  const v2 = Math.floor(v / 3) * 3;
  for (let j = g2; j < g2 + 3; j++) {
    for (let y = v2; y < v2 + 3; y++) {
      if (board[j][y] == i) total++;
    }
  }
  if (total < 1) {
    return true;
  }
  return false;
};
const cellFill = (board) => {
  const currPos = cellCheck(board);
  if (currPos === null) return true;
  const [g, v] = cellCheck(board);
  for (let i = 1; i <= 9; i++) {
    if (row(board, g, i) === true) {
      if (column(board, v, i) === true) {
        if (square(board, g, v, i) === true) {
          board[g][v] = i.toString();
          if (cellFill(board)) return board;
          board[g][v] = '-';
        }
      }
    }
  }
  return false;
};
const result = cellFill(board);
console.table(result)
