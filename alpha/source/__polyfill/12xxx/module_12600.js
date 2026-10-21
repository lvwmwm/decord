// Module ID: 12600
// Function ID: 12601
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12600

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
