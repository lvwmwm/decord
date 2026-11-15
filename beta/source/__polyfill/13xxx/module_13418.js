// Module ID: 13418
// Function ID: 13419
// Dependencies: []
// Exports: flatten

// Module 13418

export function flatten(arr) {
  const f130655 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f130655);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f130655);
  return items;
}
