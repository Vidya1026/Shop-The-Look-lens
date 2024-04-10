function findDivisibleByThree(text) {
  let sumDivisible = 0;
  let lastDivisible = null;

  for (let char of text) {
    if (/\d/.test(char)) { // Check if character is a digit
      const digit = parseInt(char);
      if (digit % 3 === 0) {
        sumDivisible += digit;
        lastDivisible = digit;
      }
    }
  }

  return { sum: sumDivisible, last: lastDivisible };
}

// Example usage
const text = "The best 6 of 8 will get 9 points";
const result = findDivisibleByThree(text);
console.log(`Sum of numbers divisible by 3: ${result.sum}`);
console.log(`Last number divisible by 3: ${result.last}`);
