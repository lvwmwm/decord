// Module ID: 10665
// Function ID: 10666
// Name: escapeStringRegexp
// Dependencies: []

// Module 10665 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
