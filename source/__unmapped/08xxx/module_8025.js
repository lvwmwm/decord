// Module ID: 8025
// Function ID: 8026
// Dependencies: []

// Module 8025
const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(closure_0, "\\$&");
  }
};
