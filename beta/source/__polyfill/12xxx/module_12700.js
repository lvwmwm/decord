// Module ID: 12700
// Function ID: 12701
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12700

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
