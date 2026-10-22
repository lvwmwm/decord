// Module ID: 5055
// Function ID: 5056
// Dependencies: []
// Exports: callback

// Module 5055

export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    tmp = { f };
    const obj = { f };
  }
  return tmp;
};
