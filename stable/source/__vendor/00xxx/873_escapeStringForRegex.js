// Module ID: 873
// Function ID: 874
// Name: escapeStringForRegex
// Dependencies: []
// Exports: escapeStringForRegex

// Module 873 (escapeStringForRegex)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
