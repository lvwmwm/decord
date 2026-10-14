// Module ID: 5703
// Function ID: 5704
// Name: isPropertyKey
// Dependencies: []

// Module 5703 (isPropertyKey)

export default function isPropertyKey(str) {
  return typeof str === "string" || typeof str === "symbol";
};
