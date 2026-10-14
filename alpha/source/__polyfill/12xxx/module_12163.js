// Module ID: 12163
// Function ID: 12164
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12163

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
