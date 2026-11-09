// Module ID: 13399
// Function ID: 13400
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13399

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
