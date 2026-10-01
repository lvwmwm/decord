// Module ID: 12422
// Function ID: 12423
// Dependencies: []
// Exports: flatten

// Module 12422

export const flatten = function flatten(arr) {
  const f117325 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f117325);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f117325);
  return items;
};
