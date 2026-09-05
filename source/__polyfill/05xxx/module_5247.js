// Module ID: 5247
// Function ID: 5248
// Dependencies: []

// Module 5247
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
