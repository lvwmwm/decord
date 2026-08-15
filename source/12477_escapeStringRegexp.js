// Module ID: 12477
// Function ID: 12478
// Name: escapeStringRegexp
// Dependencies: []

// Module 12477 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
