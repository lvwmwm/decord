// Module ID: 5103
// Function ID: 5104
// Dependencies: []
// Exports: callback

// Module 5103

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
