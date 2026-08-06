// Module ID: 4576
// Function ID: 4577
// Name: isPropertyKey
// Dependencies: []

// Module 4576 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
