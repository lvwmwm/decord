// Module ID: 12423
// Function ID: 12424
// Name: escapeStringForRegex
// Dependencies: []

// Module 12423 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
