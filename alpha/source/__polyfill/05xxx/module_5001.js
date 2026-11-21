// Module ID: 5001
// Function ID: 5002
// Dependencies: []
// Exports: callback

// Module 5001

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
