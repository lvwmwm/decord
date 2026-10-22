// Module ID: 12629
// Function ID: 12630
// Dependencies: []
// Exports: flatten

// Module 12629

export const flatten = function flatten(arr) {
  const f148789 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f148789);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f148789);
  return items;
};
