export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  function Node(value) {
    this.value = value;
    this.next = null;
  }

  const startNode = new Node(array[0]);
  let previousNode = startNode;
  for (let index = 1; index < array.length; index += 1) {
    const newNode = new Node(array[index]);
    previousNode.next = newNode;
    previousNode = newNode;
  }
  return startNode;
}
