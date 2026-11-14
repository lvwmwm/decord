// Module ID: 5404
// Function ID: 5405
// Dependencies: []
// Exports: callback

// Module 5404

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
