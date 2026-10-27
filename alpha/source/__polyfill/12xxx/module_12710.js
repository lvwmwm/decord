// Module ID: 12710
// Function ID: 12711
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12710

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
