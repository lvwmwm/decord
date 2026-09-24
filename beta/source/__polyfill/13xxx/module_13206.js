// Module ID: 13206
// Function ID: 13207
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13206

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
