// Module ID: 12648
// Function ID: 12649
// Dependencies: []
// Exports: flatten

// Module 12648

export const flatten = function flatten(arr) {
  const f149073 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f149073);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f149073);
  return items;
};
