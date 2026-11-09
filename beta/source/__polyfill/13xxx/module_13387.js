// Module ID: 13387
// Function ID: 13388
// Dependencies: []
// Exports: flatten

// Module 13387

export function flatten(arr) {
  const f130468 = (arr) => {
    if (Array.isArray(arr)) {
      const item = arr.forEach(f130468);
    } else {
      items.push(arr);
    }
  };
  const items = [];
  let item = arr.forEach(f130468);
  return items;
}
