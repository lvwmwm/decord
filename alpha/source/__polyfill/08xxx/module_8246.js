// Module ID: 8246
// Function ID: 8247
// Dependencies: []

// Module 8246
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
