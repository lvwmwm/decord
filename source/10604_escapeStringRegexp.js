// Module ID: 10604
// Function ID: 82665
// Name: escapeStringRegexp
// Dependencies: []

// Module 10604 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if ("string" !== typeof str) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
