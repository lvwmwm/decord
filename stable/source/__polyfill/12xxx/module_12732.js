// Module ID: 12732
// Function ID: 12733
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12732

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
