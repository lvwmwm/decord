// Module ID: 12702
// Function ID: 12703
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12702

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
