// Module ID: 5156
// Function ID: 5157
// Dependencies: []

// Module 5156
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
