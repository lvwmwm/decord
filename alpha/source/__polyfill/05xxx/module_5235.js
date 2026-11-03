// Module ID: 5235
// Function ID: 5236
// Dependencies: []
// Exports: callback

// Module 5235

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
