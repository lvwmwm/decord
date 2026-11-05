// Module ID: 13402
// Function ID: 13403
// Dependencies: []
// Exports: escapeStringForRegex

// Module 13402

export function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
}
