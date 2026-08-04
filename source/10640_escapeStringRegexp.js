// Module ID: 10640
// Function ID: 10641
// Name: escapeStringRegexp
// Dependencies: []

// Module 10640 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if (typeof str === "_iter") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
