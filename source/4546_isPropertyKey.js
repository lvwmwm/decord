// Module ID: 4546
// Function ID: 4547
// Name: isPropertyKey
// Dependencies: []

// Module 4546 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
