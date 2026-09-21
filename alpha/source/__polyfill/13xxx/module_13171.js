// Module ID: 13171
// Function ID: 13172
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13171

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
