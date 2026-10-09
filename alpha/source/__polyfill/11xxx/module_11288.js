// Module ID: 11288
// Function ID: 11289
// Dependencies: []
// Exports: escapeStringForRegex

// Module 11288

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
