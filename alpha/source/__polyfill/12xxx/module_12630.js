// Module ID: 12630
// Function ID: 12631
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12630

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
