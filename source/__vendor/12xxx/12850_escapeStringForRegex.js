// Module ID: 12850
// Function ID: 12851
// Name: escapeStringForRegex
// Dependencies: []

// Module 12850 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
