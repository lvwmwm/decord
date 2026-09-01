// Module ID: 5191
// Function ID: 5192
// Dependencies: []

// Module 5191
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
