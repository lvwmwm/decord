// Module ID: 7484
// Function ID: 7485
// Name: escapeStringForRegex
// Dependencies: []

// Module 7484 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
