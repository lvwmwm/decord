// Module ID: 12688
// Function ID: 12689
// Dependencies: []
// Exports: flatten

// Module 12688

export const flatten = function flatten(arr) {
  const f149546 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f149546);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f149546);
  return items;
};
