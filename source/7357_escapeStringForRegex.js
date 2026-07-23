// Module ID: 7357
// Function ID: 59318
// Name: escapeStringForRegex
// Dependencies: []

// Module 7357 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
