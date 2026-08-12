// Module ID: 5005
// Function ID: 5006
// Dependencies: []

// Module 5005
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
