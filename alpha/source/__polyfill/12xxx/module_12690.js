// Module ID: 12690
// Function ID: 12691
// Dependencies: []
// Exports: flatten

// Module 12690

export const flatten = function flatten(arr) {
  const f149639 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f149639);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f149639);
  return items;
};
