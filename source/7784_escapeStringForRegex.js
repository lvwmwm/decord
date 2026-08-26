// Module ID: 7784
// Function ID: 7785
// Name: escapeStringForRegex
// Dependencies: []

// Module 7784 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
