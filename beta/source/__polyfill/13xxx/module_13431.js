// Module ID: 13431
// Function ID: 13432
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13431

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
