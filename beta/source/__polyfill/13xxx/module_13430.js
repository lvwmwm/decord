// Module ID: 13430
// Function ID: 13431
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13430

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
