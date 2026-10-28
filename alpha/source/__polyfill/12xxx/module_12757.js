// Module ID: 12757
// Function ID: 12758
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12757

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
