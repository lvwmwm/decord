// Module ID: 12370
// Function ID: 12371
// Name: escapeStringForRegex
// Dependencies: []

// Module 12370 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
