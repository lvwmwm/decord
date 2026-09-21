// Module ID: 865
// Function ID: 866
// Name: escapeStringForRegex
// Dependencies: []
// Exports: escapeStringForRegex

// Module 865 (escapeStringForRegex)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
