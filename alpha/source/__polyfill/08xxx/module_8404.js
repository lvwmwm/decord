// Module ID: 8404
// Function ID: 8405
// Dependencies: []

// Module 8404
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
