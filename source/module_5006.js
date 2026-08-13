// Module ID: 5006
// Function ID: 5007
// Dependencies: []

// Module 5006
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
