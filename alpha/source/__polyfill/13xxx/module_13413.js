// Module ID: 13413
// Function ID: 13414
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13413

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
