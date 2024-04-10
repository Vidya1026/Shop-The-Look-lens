function getUserInputMatrix() {
  const rows = parseInt(prompt("Enter the number of rows:"));
  const cols = parseInt(prompt("Enter the number of columns:"));
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = prompt(`Enter row ${i + 1} (b for black, w for white):`);
    matrix.push(row.split(""));
  }

  return matrix;
}

function findHotCube(matrix) {
  // ... rest of the findHotCube function remains the same
}

// Example usage
const matrix = getUserInputMatrix();
const hotCube = findHotCube(matrix);
console.log(hotCube);
