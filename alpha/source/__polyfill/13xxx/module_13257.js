// Module ID: 13257
// Function ID: 13258
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13257

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
