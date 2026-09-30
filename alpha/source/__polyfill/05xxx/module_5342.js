// Module ID: 5342
// Function ID: 5343
// Dependencies: []

// Module 5342

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
