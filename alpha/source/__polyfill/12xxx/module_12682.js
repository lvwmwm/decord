// Module ID: 12682
// Function ID: 12683
// Dependencies: []
// Exports: flatten

// Module 12682

export const flatten = function flatten(arr) {
  const f149496 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f149496);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f149496);
  return items;
};
