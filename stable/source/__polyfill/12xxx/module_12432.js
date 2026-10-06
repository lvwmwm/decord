// Module ID: 12432
// Function ID: 12433
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12432

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
