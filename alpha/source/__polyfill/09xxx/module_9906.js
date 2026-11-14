// Module ID: 9906
// Function ID: 9907
// Dependencies: []
// Exports: flatten

// Module 9906

export function flatten(arr) {
  const f130581 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f130581);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f130581);
  return items;
}
