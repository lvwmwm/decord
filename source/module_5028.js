// Module ID: 5028
// Function ID: 5029
// Dependencies: []

// Module 5028
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
