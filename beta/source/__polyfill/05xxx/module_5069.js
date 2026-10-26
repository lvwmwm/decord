// Module ID: 5069
// Function ID: 5070
// Dependencies: []
// Exports: callback

// Module 5069

export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
};
