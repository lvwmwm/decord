// Module ID: 13113
// Function ID: 13114
// Dependencies: []
// Exports: flatten

// Module 13113

export function flatten(arr) {
  const f127498 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f127498);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f127498);
  return items;
}
