// Module ID: 13419
// Function ID: 13420
// Dependencies: []
// Exports: flatten

// Module 13419

export function flatten(arr) {
  const f130601 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f130601);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f130601);
  return items;
}
