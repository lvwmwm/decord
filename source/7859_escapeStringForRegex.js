// Module ID: 7859
// Function ID: 7860
// Name: escapeStringForRegex
// Dependencies: []

// Module 7859 (escapeStringForRegex)
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
