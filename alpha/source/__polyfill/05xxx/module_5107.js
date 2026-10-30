// Module ID: 5107
// Function ID: 5108
// Dependencies: []
// Exports: callback

// Module 5107

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
