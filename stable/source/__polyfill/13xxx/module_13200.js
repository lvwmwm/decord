// Module ID: 13200
// Function ID: 13201
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13200

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
