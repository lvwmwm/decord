// Module ID: 7468
// Function ID: 7469
// Name: escapeStringForRegex
// Dependencies: []

// Module 7468 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
