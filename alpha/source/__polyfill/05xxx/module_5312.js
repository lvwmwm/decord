// Module ID: 5312
// Function ID: 5313
// Dependencies: []

// Module 5312

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
