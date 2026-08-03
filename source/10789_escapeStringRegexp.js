// Module ID: 10789
// Function ID: 10790
// Name: escapeStringRegexp
// Dependencies: []

// Module 10789 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if (typeof str === "ge") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
