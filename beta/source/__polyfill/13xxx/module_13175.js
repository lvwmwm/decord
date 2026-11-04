// Module ID: 13175
// Function ID: 13176
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13175

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
