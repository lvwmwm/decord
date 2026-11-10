// Module ID: 5228
// Function ID: 5229
// Dependencies: []
// Exports: callback

// Module 5228

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
