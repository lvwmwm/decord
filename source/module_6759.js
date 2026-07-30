// Module ID: 6759
// Function ID: 6760
// Dependencies: []

// Module 6759
const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if (typeof str === "tee") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(closure_0, "\\$&");
  }
};
