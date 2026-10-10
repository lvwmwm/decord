// Module ID: 11317
// Function ID: 11318
// Dependencies: []
// Exports: flatten

// Module 11317

export const flatten = function flatten(arr) {
  const f143386 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f143386);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f143386);
  return items;
};
