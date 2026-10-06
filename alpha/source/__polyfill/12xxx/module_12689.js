// Module ID: 12689
// Function ID: 12690
// Dependencies: []
// Exports: flatten

// Module 12689

export const flatten = function flatten(arr) {
  const f142984 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f142984);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f142984);
  return items;
};
