// Module ID: 12686
// Function ID: 12687
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12686

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
