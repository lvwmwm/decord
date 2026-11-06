// Module ID: 13163
// Function ID: 13164
// Dependencies: []
// Exports: flatten

// Module 13163

export function flatten(arr) {
  const f127929 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f127929);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f127929);
  return items;
}
