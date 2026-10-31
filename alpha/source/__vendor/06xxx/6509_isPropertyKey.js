// Module ID: 6509
// Function ID: 6510
// Name: isPropertyKey
// Dependencies: []

// Module 6509 (isPropertyKey)

export default function isPropertyKey(str) {
  return typeof str === "string" || typeof str === "symbol";
};
