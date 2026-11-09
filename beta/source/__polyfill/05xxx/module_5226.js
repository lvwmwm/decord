// Module ID: 5226
// Function ID: 5227
// Dependencies: []
// Exports: callback

// Module 5226

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
