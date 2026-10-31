// Module ID: 13148
// Function ID: 13149
// Dependencies: []
// Exports: flatten

// Module 13148

export function flatten(arr) {
  const f127883 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f127883);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f127883);
  return items;
}
