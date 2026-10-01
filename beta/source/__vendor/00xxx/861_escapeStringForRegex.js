// Module ID: 861
// Function ID: 862
// Name: escapeStringForRegex
// Dependencies: []
// Exports: escapeStringForRegex

// Module 861 (escapeStringForRegex)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const escapeStringForRegex = function escapeStringForRegex(str) {
  str = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  return str.replace(/-/g, "\\x2d");
};
