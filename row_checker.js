function getEmptyRowCell(arr) {
  for (let i = 0; i < arr.length; i += 1) {  
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === '-') {
        return [i,j];
      }
    }    
  }
  
  return null;
}
let a = [
  ['w','r','t','g'],
  ['r','-','d','p']
]
console.log(getEmptyRowCell(a));
