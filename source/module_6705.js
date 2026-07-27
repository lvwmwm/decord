// Module ID: 6705
// Function ID: 59226
// Dependencies: []

// Module 6705
const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if ("string" !== typeof str) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(closure_0, "\\$&");
  }
};
