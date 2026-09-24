// Module ID: 5138
// Function ID: 5139
// Dependencies: []

// Module 5138

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
