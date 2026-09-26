// Module ID: 5083
// Function ID: 5084
// Dependencies: []

// Module 5083

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
