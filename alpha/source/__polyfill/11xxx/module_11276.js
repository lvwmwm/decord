// Module ID: 11276
// Function ID: 11277
// Dependencies: []
// Exports: flatten

// Module 11276

export const flatten = function flatten(arr) {
  const f142963 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f142963);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f142963);
  return items;
};
