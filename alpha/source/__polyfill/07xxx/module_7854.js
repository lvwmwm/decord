// Module ID: 7854
// Function ID: 7855
// Dependencies: []

// Module 7854
const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default function(str) {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(re0, "\\$&");
  }
};
