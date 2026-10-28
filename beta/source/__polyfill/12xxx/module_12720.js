// Module ID: 12720
// Function ID: 12721
// Dependencies: []
// Exports: flatten

// Module 12720

export const flatten = function flatten(arr) {
  const f149673 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f149673);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f149673);
  return items;
};
