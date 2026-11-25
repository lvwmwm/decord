// Module ID: 5100
// Function ID: 5101
// Dependencies: []
// Exports: callback

// Module 5100

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
