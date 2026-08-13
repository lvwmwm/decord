// Module ID: 7620
// Function ID: 7621
// Name: escapeStringForRegex
// Dependencies: []

// Module 7620 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
