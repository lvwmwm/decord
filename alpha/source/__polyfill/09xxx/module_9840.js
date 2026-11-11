// Module ID: 9840
// Function ID: 9841
// Dependencies: []
// Exports: flatten

// Module 9840

export function flatten(arr) {
  const f129175 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f129175);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f129175);
  return items;
}
