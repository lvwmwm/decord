// Module ID: 12456
// Function ID: 12457
// Name: escapeStringForRegex
// Dependencies: []

// Module 12456 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
