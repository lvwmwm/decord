// Module ID: 7345
// Function ID: 59264
// Name: flatten
// Dependencies: []

// Module 7345 (flatten)
arg5.flatten = function flatten(arr) {
  const items = [];
  function flattenHelper(arr) {
    const item = arr.forEach((arg0) => {
      if (Array.isArray(arg0)) {
        outer1_1(arg0);
      } else {
        outer1_0.push(arg0);
      }
    });
  }
  flattenHelper(arr);
  return items;
};
