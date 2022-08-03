const fs = require('fs');

const sudoku = require('./testing');

function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  return puzzle;
} 

function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  const puzzle = sudokuParse(data);

  const solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
    console.log(sudoku.prettyBoard(solvedPuzzle));
  } else {
    console.log("The board wasn't solved :(");
  }
}


fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve,
);
