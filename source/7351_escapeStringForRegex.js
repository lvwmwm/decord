// Module ID: 7351
// Function ID: 59261
// Name: escapeStringForRegex
// Dependencies: []

// Module 7351 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
