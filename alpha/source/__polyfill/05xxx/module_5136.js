// Module ID: 5136
// Function ID: 5137
// Dependencies: []

// Module 5136

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
