// Module ID: 12396
// Function ID: 12397
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12396

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
