// Module ID: 10594
// Function ID: 82689
// Name: escapeStringRegexp
// Dependencies: []

// Module 10594 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if ("string" !== typeof str) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
