// Module ID: 13311
// Function ID: 13312
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13311

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
