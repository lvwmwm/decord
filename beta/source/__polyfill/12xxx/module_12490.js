// Module ID: 12490
// Function ID: 12491
// Dependencies: []
// Exports: flatten

// Module 12490

export const flatten = function flatten(arr) {
  const f146661 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f146661);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f146661);
  return items;
};
