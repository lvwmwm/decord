// Module ID: 12618
// Function ID: 12619
// Dependencies: []
// Exports: flatten

// Module 12618

export const flatten = function flatten(arr) {
  const f148564 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f148564);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f148564);
  return items;
};
