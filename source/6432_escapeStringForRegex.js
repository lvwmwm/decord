// Module ID: 6432
// Function ID: 57800
// Name: escapeStringForRegex
// Dependencies: []

// Module 6432 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
