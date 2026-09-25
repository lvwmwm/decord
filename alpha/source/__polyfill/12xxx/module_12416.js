// Module ID: 12416
// Function ID: 12417
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12416

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
