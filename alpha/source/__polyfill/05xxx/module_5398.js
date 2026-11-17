// Module ID: 5398
// Function ID: 5399
// Dependencies: []
// Exports: callback

// Module 5398

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
