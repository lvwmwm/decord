// Module ID: 5101
// Function ID: 5102
// Dependencies: []
// Exports: callback

// Module 5101

export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
};
