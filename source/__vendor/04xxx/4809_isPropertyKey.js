// Module ID: 4809
// Function ID: 4810
// Name: isPropertyKey
// Dependencies: []

// Module 4809 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
