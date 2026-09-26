// Module ID: 861
// Function ID: 862
// Name: escapeStringForRegex
// Dependencies: []
// Exports: escapeStringForRegex

// Module 861 (escapeStringForRegex)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
