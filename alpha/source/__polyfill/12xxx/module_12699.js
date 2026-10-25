// Module ID: 12699
// Function ID: 12700
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12699

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
