// Module ID: 8234
// Function ID: 8235
// Dependencies: []

// Module 8234
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
