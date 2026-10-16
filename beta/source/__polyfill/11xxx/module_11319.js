// Module ID: 11319
// Function ID: 11320
// Dependencies: []
// Exports: flatten

// Module 11319

export const flatten = function flatten(arr) {
  const f143706 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f143706);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f143706);
  return items;
};
