// Module ID: 13401
// Function ID: 13402
// Dependencies: []
// Exports: flatten

// Module 13401

export function flatten(arr) {
  const f130672 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f130672);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f130672);
  return items;
}
