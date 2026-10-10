// Module ID: 11329
// Function ID: 11330
// Dependencies: []
// Exports: escapeStringForRegex

// Module 11329

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
