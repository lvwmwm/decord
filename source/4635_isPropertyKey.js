// Module ID: 4635
// Function ID: 4636
// Name: isPropertyKey
// Dependencies: []

// Module 4635 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
