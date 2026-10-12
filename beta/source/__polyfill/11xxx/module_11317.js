// Module ID: 11317
// Function ID: 11318
// Dependencies: []
// Exports: flatten

// Module 11317

export const flatten = function flatten(arr) {
  const f143678 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f143678);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f143678);
  return items;
};
