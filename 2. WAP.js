function divideArrayElements(arr) {
  const results = [];
  for (let i = 0; i < arr.length - 1; i++) {
    try {
      const result = arr[i] / arr[i + 1];
      results.push(result);
    } catch (error) {
      if (error instanceof ZeroDivisionError) {
        results.push("Division by zero");
      } else {
        throw error; // Re-throw other errors
      }
    }
  }

  // Handle the last element by dividing it by the first element
  try {
    results.push(arr[arr.length - 1] / arr[0]);
  } catch (error) {
    if (error instanceof ZeroDivisionError) {
      results.push("Division by zero");
    } else {
      throw error; // Re-throw other errors
    }
  }

  return results;
}

// Example usage
const array = [9, 33, 0, 7, 2, 82, 77];
const results = divideArrayElements(array);
console.log(results);
