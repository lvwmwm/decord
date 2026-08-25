// Module ID: 5072
// Function ID: 5073
// Dependencies: []

// Module 5072
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
