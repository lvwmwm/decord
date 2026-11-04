// Module ID: 13383
// Function ID: 13384
// Dependencies: []
// Exports: flatten

// Module 13383

export function flatten(arr) {
  const f129334 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f129334);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f129334);
  return items;
}
