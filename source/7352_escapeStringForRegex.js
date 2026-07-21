// Module ID: 7352
// Function ID: 59273
// Name: escapeStringForRegex
// Dependencies: []

// Module 7352 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
