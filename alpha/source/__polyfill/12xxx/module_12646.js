// Module ID: 12646
// Function ID: 12647
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12646

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
