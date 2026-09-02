// Module ID: 12680
// Function ID: 12681
// Name: escapeStringForRegex
// Dependencies: []

// Module 12680 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
