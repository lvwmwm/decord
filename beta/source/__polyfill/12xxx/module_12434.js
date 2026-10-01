// Module ID: 12434
// Function ID: 12435
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12434

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
