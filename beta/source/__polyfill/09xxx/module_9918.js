// Module ID: 9918
// Function ID: 9919
// Dependencies: []
// Exports: escapeStringForRegex

// Module 9918

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
