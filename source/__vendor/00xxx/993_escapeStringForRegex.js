// Module ID: 993
// Function ID: 994
// Name: escapeStringForRegex
// Dependencies: []

// Module 993 (escapeStringForRegex)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.escapeStringForRegex = function escapeStringForRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
