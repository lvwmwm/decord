// Module ID: 5258
// Function ID: 5259
// Dependencies: []
// Exports: callback

// Module 5258

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
