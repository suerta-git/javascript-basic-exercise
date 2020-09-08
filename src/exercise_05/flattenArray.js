export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }

  let level = 0;

  function flatten(nestedArray) {
    level += 1;
    if (level >= 2) {
      return nestedArray;
    }
    const result = [];
    nestedArray.forEach((value) => {
      if (Array.isArray(value)) {
        result.push(...flatten(value));
      } else {
        result.push(value);
      }
    });
    level -= 1;
    return result;
  }

  return flatten(array);
}
