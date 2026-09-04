// Module ID: 4817
// Function ID: 4818
// Name: isPropertyKey
// Dependencies: []

// Module 4817 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
