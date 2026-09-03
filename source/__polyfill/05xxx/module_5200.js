// Module ID: 5200
// Function ID: 5201
// Dependencies: []

// Module 5200
arg5.default = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
