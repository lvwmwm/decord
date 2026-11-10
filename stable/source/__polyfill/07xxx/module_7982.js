// Module ID: 7982
// Function ID: 7983
// Dependencies: []

// Module 7982
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
