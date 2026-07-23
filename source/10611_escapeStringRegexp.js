// Module ID: 10611
// Function ID: 82786
// Name: escapeStringRegexp
// Dependencies: []

// Module 10611 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if ("string" !== typeof str) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
