// Module ID: 7577
// Function ID: 7578
// Name: escapeStringForRegex
// Dependencies: []

// Module 7577 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
