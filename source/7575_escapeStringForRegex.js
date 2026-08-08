// Module ID: 7575
// Function ID: 7576
// Name: escapeStringForRegex
// Dependencies: []

// Module 7575 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
