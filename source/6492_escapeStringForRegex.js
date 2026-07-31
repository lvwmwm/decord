// Module ID: 6492
// Function ID: 6493
// Name: escapeStringForRegex
// Dependencies: []

// Module 6492 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
