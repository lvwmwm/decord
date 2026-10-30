// Module ID: 13125
// Function ID: 13126
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13125

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
