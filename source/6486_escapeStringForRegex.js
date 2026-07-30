// Module ID: 6486
// Function ID: 6487
// Name: escapeStringForRegex
// Dependencies: []

// Module 6486 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
