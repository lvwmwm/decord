// Module ID: 5394
// Function ID: 5395
// Dependencies: []
// Exports: callback

// Module 5394

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
