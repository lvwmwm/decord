// Module ID: 5146
// Function ID: 5147
// Name: isPropertyKey
// Dependencies: []

// Module 5146 (isPropertyKey)

export default function isPropertyKey(str) {
  return typeof str === "string" || typeof str === "symbol";
};
