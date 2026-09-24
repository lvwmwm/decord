// Module ID: 13266
// Function ID: 13267
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13266

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
