// Module ID: 5067
// Function ID: 5068
// Dependencies: []
// Exports: callback

// Module 5067

export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
};
