// Module ID: 7496
// Function ID: 7497
// Name: escapeStringForRegex
// Dependencies: []

// Module 7496 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
