function findHotCube(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let top = rows;
  let left = cols;
  let bottom = 0;
  let right = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 'w') {
        top = Math.min(top, i);
        left = Math.min(left, j);
        bottom = Math.max(bottom, i);
        right = Math.max(right, j);
      }
    }
  }

  return {
    top,
    left,
    height: bottom - top + 1,
    width: right - left + 1,
  };
}

// Example usage
const matrix = [
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
];

const hotCube = findHotCube(matrix);
console.log(hotCube);
