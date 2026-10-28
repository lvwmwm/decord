// Module ID: 5102
// Function ID: 5103
// Dependencies: []
// Exports: callback

// Module 5102

export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
};
