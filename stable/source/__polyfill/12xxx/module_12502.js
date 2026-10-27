// Module ID: 12502
// Function ID: 12503
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12502

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
