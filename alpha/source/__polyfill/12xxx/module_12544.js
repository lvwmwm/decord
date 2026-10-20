// Module ID: 12544
// Function ID: 12545
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12544

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
