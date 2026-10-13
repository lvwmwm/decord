// Module ID: 12115
// Function ID: 12116
// Dependencies: []
// Exports: flatten

// Module 12115

export const flatten = function flatten(arr) {
  const f144839 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f144839);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f144839);
  return items;
};
