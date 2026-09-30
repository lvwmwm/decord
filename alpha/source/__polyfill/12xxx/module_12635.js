// Module ID: 12635
// Function ID: 12636
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12635

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
