// Module ID: 4438
// Function ID: 4439
// Name: isPropertyKey
// Dependencies: []

// Module 4438 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
