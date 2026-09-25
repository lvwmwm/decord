// Module ID: 5139
// Function ID: 5140
// Dependencies: []

// Module 5139

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};
