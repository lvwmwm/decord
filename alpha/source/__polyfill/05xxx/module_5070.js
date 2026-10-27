// Module ID: 5070
// Function ID: 5071
// Dependencies: []
// Exports: callback

// Module 5070

export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
};
