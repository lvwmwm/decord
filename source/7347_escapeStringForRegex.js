// Module ID: 7347
// Function ID: 59250
// Name: escapeStringForRegex
// Dependencies: []

// Module 7347 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
