// Module ID: 5234
// Function ID: 5235
// Dependencies: []
// Exports: callback

// Module 5234

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
