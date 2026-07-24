// Module ID: 7595
// Function ID: 60566
// Dependencies: []

// Module 7595
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
