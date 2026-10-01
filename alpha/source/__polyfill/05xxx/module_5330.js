// Module ID: 5330
// Function ID: 5331
// Dependencies: []

// Module 5330

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
