// Module ID: 12420
// Function ID: 12421
// Dependencies: []
// Exports: flatten

// Module 12420

export const flatten = function flatten(arr) {
  const f141152 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f141152);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f141152);
  return items;
};
