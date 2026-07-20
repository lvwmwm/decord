// Module ID: 7539
// Function ID: 60386
// Dependencies: []

// Module 7539
let closure_0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if ("string" !== typeof str) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(closure_0, "\\$&");
  }
};
