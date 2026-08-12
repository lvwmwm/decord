// Module ID: 7616
// Function ID: 7617
// Name: escapeStringForRegex
// Dependencies: []

// Module 7616 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
