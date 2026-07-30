// Module ID: 10663
// Function ID: 10664
// Name: escapeStringRegexp
// Dependencies: []

// Module 10663 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if (typeof str === "tee") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
