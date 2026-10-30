// Module ID: 12720
// Function ID: 12721
// Dependencies: []
// Exports: flatten

// Module 12720

export const flatten = function flatten(arr) {
  const f149675 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f149675);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f149675);
  return items;
};
