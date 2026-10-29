// Module ID: 12962
// Function ID: 12963
// Dependencies: []
// Exports: flatten

// Module 12962

export function flatten(arr) {
  const f152475 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f152475);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f152475);
  return items;
}
