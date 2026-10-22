// Module ID: 12641
// Function ID: 12642
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12641

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
