// Module ID: 9851
// Function ID: 9852
// Dependencies: []
// Exports: escapeStringForRegex

// Module 9851

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
