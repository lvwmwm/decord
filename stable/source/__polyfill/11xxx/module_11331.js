// Module ID: 11331
// Function ID: 11332
// Dependencies: []
// Exports: escapeStringForRegex

// Module 11331

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
