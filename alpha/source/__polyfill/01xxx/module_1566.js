// Module ID: 1566
// Function ID: 1567
// Dependencies: []

// Module 1566

export default function(str) {
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
