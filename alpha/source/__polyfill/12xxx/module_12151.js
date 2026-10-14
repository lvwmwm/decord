// Module ID: 12151
// Function ID: 12152
// Dependencies: []
// Exports: flatten

// Module 12151

export const flatten = function flatten(arr) {
  const f145095 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f145095);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f145095);
  return items;
};
