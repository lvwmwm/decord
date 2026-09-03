// Module ID: 4810
// Function ID: 4811
// Name: isPropertyKey
// Dependencies: []

// Module 4810 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
