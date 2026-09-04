// Module ID: 5208
// Function ID: 5209
// Dependencies: []

// Module 5208
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
