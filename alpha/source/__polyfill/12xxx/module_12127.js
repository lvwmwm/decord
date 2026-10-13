// Module ID: 12127
// Function ID: 12128
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12127

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
