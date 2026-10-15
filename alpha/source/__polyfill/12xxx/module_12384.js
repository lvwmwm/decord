// Module ID: 12384
// Function ID: 12385
// Dependencies: []
// Exports: flatten

// Module 12384

export const flatten = function flatten(arr) {
  const f145664 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f145664);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f145664);
  return items;
};
