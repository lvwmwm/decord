// Module ID: 12674
// Function ID: 12675
// Dependencies: []
// Exports: flatten

// Module 12674

export const flatten = function flatten(arr) {
  const f142542 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f142542);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f142542);
  return items;
};
