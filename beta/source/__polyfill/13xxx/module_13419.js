// Module ID: 13419
// Function ID: 13420
// Dependencies: []
// Exports: flatten

// Module 13419

export function flatten(arr) {
  const f130586 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f130586);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f130586);
  return items;
}
