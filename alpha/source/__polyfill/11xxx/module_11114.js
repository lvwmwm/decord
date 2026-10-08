// Module ID: 11114
// Function ID: 11115
// Dependencies: []
// Exports: escapeStringForRegex

// Module 11114

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
