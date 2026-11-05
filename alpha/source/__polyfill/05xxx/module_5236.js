// Module ID: 5236
// Function ID: 5237
// Dependencies: []
// Exports: callback

// Module 5236

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
