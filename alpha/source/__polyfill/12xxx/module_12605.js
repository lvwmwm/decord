// Module ID: 12605
// Function ID: 12606
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12605

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
