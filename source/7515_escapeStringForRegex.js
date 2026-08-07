// Module ID: 7515
// Function ID: 7516
// Name: escapeStringForRegex
// Dependencies: []

// Module 7515 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
