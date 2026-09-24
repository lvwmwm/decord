// Module ID: 5085
// Function ID: 5086
// Dependencies: []

// Module 5085

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
