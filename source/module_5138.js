// Module ID: 5138
// Function ID: 5139
// Dependencies: []

// Module 5138
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
