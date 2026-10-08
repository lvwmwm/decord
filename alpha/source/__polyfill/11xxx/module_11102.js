// Module ID: 11102
// Function ID: 11103
// Dependencies: []
// Exports: flatten

// Module 11102

export const flatten = function flatten(arr) {
  const f142330 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f142330);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f142330);
  return items;
};
