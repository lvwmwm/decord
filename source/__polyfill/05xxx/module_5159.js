// Module ID: 5159
// Function ID: 5160
// Dependencies: []

// Module 5159
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
