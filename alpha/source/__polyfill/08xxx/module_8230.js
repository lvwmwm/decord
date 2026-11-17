// Module ID: 8230
// Function ID: 8231
// Dependencies: []

// Module 8230
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
