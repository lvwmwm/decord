// Module ID: 12692
// Function ID: 12693
// Name: escapeStringForRegex
// Dependencies: []

// Module 12692 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
