// Module ID: 7976
// Function ID: 7977
// Dependencies: []

// Module 7976
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
