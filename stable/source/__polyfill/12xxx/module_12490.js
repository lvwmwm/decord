// Module ID: 12490
// Function ID: 12491
// Dependencies: []
// Exports: flatten

// Module 12490

export const flatten = function flatten(arr) {
  const f146670 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f146670);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f146670);
  return items;
};
