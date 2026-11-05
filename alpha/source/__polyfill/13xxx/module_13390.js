// Module ID: 13390
// Function ID: 13391
// Dependencies: []
// Exports: flatten

// Module 13390

export function flatten(arr) {
  const f129561 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f129561);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f129561);
  return items;
}
