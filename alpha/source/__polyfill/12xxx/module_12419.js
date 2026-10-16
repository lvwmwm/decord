// Module ID: 12419
// Function ID: 12420
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12419

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
