// Module ID: 4593
// Function ID: 4594
// Name: isPropertyKey
// Dependencies: []

// Module 4593 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
