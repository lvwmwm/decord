// Module ID: 12745
// Function ID: 12746
// Dependencies: []
// Exports: flatten

// Module 12745

export const flatten = function flatten(arr) {
  const f150857 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f150857);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f150857);
  return items;
};
