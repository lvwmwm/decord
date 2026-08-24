// Module ID: 7897
// Function ID: 7898
// Name: escapeStringForRegex
// Dependencies: []

// Module 7897 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
