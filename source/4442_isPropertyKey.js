// Module ID: 4442
// Function ID: 4443
// Name: isPropertyKey
// Dependencies: []

// Module 4442 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
