// Module ID: 9839
// Function ID: 9840
// Dependencies: []
// Exports: flatten

// Module 9839

export function flatten(arr) {
  const f129185 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f129185);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f129185);
  return items;
}
