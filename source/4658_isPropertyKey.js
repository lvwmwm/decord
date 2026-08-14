// Module ID: 4658
// Function ID: 4659
// Name: isPropertyKey
// Dependencies: []

// Module 4658 (isPropertyKey)

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
