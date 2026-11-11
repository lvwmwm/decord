// Module ID: 9852
// Function ID: 9853
// Dependencies: []
// Exports: escapeStringForRegex

// Module 9852

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
