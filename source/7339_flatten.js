// Module ID: 7339
// Function ID: 59178
// Name: flatten
// Dependencies: []

// Module 7339 (flatten)
arg5.flatten = function flatten(arr) {
  const items = [];
  function flattenHelper(arr) {
    const item = arr.forEach((arg0) => {
      if (Array.isArray(arg0)) {
        callback(arg0);
      } else {
        const arr = arr.push(arg0);
      }
    });
  }
  flattenHelper(arr);
  return items;
};
