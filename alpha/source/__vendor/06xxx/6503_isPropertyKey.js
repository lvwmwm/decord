// Module ID: 6503
// Function ID: 6504
// Name: isPropertyKey
// Dependencies: []

// Module 6503 (isPropertyKey)

export default function isPropertyKey(str) {
  return typeof str === "string" || typeof str === "symbol";
};
