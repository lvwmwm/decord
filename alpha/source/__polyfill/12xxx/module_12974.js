// Module ID: 12974
// Function ID: 12975
// Dependencies: []
// Exports: escapeStringForRegex

// Module 12974

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
