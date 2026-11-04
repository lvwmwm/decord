// Module ID: 13382
// Function ID: 13383
// Dependencies: []
// Exports: flatten

// Module 13382

export function flatten(arr) {
  const f128878 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f128878);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f128878);
  return items;
}
