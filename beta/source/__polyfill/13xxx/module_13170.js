// Module ID: 13170
// Function ID: 13171
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13170

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
