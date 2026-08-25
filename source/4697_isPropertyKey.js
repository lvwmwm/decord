// Module ID: 4697
// Function ID: 4698
// Name: isPropertyKey
// Dependencies: []

// Module 4697 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
