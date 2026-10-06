// Module ID: 12701
// Function ID: 12702
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12701

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
