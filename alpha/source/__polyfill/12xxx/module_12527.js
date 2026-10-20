// Module ID: 12527
// Function ID: 12528
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12527

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
