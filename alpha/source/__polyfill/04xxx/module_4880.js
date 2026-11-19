// Module ID: 4880
// Function ID: 4881
// Dependencies: []
// Exports: callback

// Module 4880

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
