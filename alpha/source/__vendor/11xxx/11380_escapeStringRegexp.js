// Module ID: 11380
// Function ID: 11381
// Name: escapeStringRegexp
// Dependencies: []
// Exports: default

// Module 11380 (escapeStringRegexp)

export default function escapeStringRegexp(str) {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    const str3 = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    return str3.replace(/-/g, "\\x2d");
  }
};
