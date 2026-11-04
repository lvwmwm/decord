// Module ID: 8313
// Function ID: 8314
// Dependencies: []

// Module 8313
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
