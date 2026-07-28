// Module ID: 6468
// Function ID: 57889
// Name: escapeStringForRegex
// Dependencies: []

// Module 6468 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
