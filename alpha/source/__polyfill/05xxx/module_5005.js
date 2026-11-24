// Module ID: 5005
// Function ID: 5006
// Dependencies: []
// Exports: callback

// Module 5005

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
