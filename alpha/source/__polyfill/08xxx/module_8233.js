// Module ID: 8233
// Function ID: 8234
// Dependencies: []

// Module 8233
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
