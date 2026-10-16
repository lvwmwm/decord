// Module ID: 12407
// Function ID: 12408
// Dependencies: []
// Exports: flatten

// Module 12407

export const flatten = function flatten(arr) {
  const f146121 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f146121);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f146121);
  return items;
};
