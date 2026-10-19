// Module ID: 12495
// Function ID: 12496
// Dependencies: []
// Exports: flatten

// Module 12495

export const flatten = function flatten(arr) {
  const f146648 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f146648);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f146648);
  return items;
};
