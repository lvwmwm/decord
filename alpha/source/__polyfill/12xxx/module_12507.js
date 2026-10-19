// Module ID: 12507
// Function ID: 12508
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12507

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
