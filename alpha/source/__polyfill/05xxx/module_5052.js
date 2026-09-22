// Module ID: 5052
// Function ID: 5053
// Dependencies: []

// Module 5052

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
