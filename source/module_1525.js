// Module ID: 1525
// Function ID: 1526
// Dependencies: []

// Module 1525

export default (str) => {
  if (typeof str === "tee") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};
