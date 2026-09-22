// Module ID: 13175
// Function ID: 13176
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13175

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
