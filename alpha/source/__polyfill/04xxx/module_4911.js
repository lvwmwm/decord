// Module ID: 4911
// Function ID: 4912
// Dependencies: []
// Exports: callback

// Module 4911

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
