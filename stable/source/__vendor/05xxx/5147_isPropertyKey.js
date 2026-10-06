// Module ID: 5147
// Function ID: 5148
// Name: isPropertyKey
// Dependencies: []

// Module 5147 (isPropertyKey)

export default function isPropertyKey(str) {
  return typeof str === "string" || typeof str === "symbol";
};
