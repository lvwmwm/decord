// Module ID: 13364
// Function ID: 13365
// Dependencies: []
// Exports: flatten

// Module 13364

export function flatten(arr) {
  const f129824 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f129824);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f129824);
  return items;
}
