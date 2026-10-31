// Module ID: 13160
// Function ID: 13161
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13160

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
