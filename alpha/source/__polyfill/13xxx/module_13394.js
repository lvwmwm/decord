// Module ID: 13394
// Function ID: 13395
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13394

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
