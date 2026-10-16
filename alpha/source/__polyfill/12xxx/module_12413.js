// Module ID: 12413
// Function ID: 12414
// Dependencies: []
// Exports: flatten

// Module 12413

export const flatten = function flatten(arr) {
  const f146205 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f146205);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f146205);
  return items;
};
