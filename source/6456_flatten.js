// Module ID: 6456
// Function ID: 57806
// Name: flatten
// Dependencies: []

// Module 6456 (flatten)
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
