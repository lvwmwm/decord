// Module ID: 13163
// Function ID: 13164
// Dependencies: []
// Exports: flatten

// Module 13163

export function flatten(arr) {
  const f127930 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f127930);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f127930);
  return items;
}
