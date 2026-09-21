// Module ID: 5053
// Function ID: 5054
// Dependencies: []

// Module 5053

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
