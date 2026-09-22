// Module ID: 13051
// Function ID: 13052
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13051

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
