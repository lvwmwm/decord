// Module ID: 5112
// Function ID: 5113
// Dependencies: []
// Exports: callback

// Module 5112

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
