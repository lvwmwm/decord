// Module ID: 12389
// Function ID: 12390
// Name: escapeStringForRegex
// Dependencies: []

// Module 12389 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
