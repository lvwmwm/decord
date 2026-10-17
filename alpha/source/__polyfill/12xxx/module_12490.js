// Module ID: 12490
// Function ID: 12491
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12490

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
