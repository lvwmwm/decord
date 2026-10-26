// Module ID: 12687
// Function ID: 12688
// Dependencies: []
// Exports: flatten

// Module 12687

export const flatten = function flatten(arr) {
  const f149542 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f149542);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f149542);
  return items;
};
