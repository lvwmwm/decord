// Module ID: 9919
// Function ID: 9920
// Dependencies: []
// Exports: flatten

// Module 9919

export function flatten(arr) {
  const f130888 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f130888);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f130888);
  return items;
}
