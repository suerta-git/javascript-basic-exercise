export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const resultArray = [];
  if (start <= end) {
    for (let num = start; num < end; num += 1) {
      resultArray.push(num);
    }
  } else {
    for (let num = start; num > end; num -= 1) {
      resultArray.push(num);
    }
  }
  return resultArray;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  return numbers.reduce((previous, current) => previous + current, 0);
}
