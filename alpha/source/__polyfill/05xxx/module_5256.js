// Module ID: 5256
// Function ID: 5257
// Dependencies: []
// Exports: callback

// Module 5256

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
