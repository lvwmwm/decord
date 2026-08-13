// Module ID: 4636
// Function ID: 4637
// Name: isPropertyKey
// Dependencies: []

// Module 4636 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
