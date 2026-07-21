// Module ID: 7340
// Function ID: 59190
// Name: flatten
// Dependencies: []

// Module 7340 (flatten)
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
