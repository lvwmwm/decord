// Module ID: 12694
// Function ID: 12695
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12694

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
