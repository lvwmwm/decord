// Module ID: 13395
// Function ID: 13396
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13395

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
