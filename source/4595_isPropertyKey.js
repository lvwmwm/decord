// Module ID: 4595
// Function ID: 4596
// Name: isPropertyKey
// Dependencies: []

// Module 4595 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
