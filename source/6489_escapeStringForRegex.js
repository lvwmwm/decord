// Module ID: 6489
// Function ID: 6490
// Name: escapeStringForRegex
// Dependencies: []

// Module 6489 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
