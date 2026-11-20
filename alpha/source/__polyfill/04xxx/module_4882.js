// Module ID: 4882
// Function ID: 4883
// Dependencies: []
// Exports: callback

// Module 4882

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
}
