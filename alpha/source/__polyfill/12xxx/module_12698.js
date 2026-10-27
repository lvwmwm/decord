// Module ID: 12698
// Function ID: 12699
// Dependencies: []
// Exports: flatten

// Module 12698

export const flatten = function flatten(arr) {
  const f149977 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f149977);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f149977);
  return items;
};
