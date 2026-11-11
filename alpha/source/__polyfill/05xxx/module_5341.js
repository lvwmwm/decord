// Module ID: 5341
// Function ID: 5342
// Dependencies: []
// Exports: callback

// Module 5341

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
