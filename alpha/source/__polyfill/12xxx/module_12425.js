// Module ID: 12425
// Function ID: 12426
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12425

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
