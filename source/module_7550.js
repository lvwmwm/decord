// Module ID: 7550
// Function ID: 60458
// Dependencies: []

// Module 7550
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
