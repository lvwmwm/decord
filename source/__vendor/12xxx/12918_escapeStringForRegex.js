// Module ID: 12918
// Function ID: 12919
// Name: escapeStringForRegex
// Dependencies: []

// Module 12918 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
