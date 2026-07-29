// Module ID: 10667
// Function ID: 10668
// Name: escapeStringRegexp
// Dependencies: []

// Module 10667 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if (typeof str === "init") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
