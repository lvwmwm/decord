// Module ID: 5051
// Function ID: 5052
// Dependencies: []

// Module 5051

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
