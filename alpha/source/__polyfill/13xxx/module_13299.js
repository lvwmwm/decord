// Module ID: 13299
// Function ID: 13300
// Dependencies: []
// Exports: flatten

// Module 13299

export function flatten(arr) {
  const f128058 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f128058);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f128058);
  return items;
}
