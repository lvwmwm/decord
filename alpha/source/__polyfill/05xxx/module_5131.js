// Module ID: 5131
// Function ID: 5132
// Dependencies: []
// Exports: callback

// Module 5131

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
