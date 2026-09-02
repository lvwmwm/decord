// Module ID: 5199
// Function ID: 5200
// Dependencies: []

// Module 5199
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
