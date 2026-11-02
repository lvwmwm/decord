// Module ID: 13163
// Function ID: 13164
// Dependencies: []
// Exports: flatten

// Module 13163

export function flatten(arr) {
  const f127938 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f127938);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f127938);
  return items;
}
