// Module ID: 7641
// Function ID: 7642
// Name: escapeStringForRegex
// Dependencies: []

// Module 7641 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
