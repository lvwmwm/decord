// Module ID: 5143
// Function ID: 5144
// Dependencies: []

// Module 5143
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
