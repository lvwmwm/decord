// Module ID: 8224
// Function ID: 8225
// Dependencies: []

// Module 8224
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
