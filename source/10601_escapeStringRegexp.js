// Module ID: 10601
// Function ID: 82736
// Name: escapeStringRegexp
// Dependencies: []

// Module 10601 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if ("string" !== typeof str) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
