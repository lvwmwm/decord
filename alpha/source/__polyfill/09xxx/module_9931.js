// Module ID: 9931
// Function ID: 9932
// Dependencies: []
// Exports: escapeStringForRegex

// Module 9931

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
