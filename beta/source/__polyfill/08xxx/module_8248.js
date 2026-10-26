// Module ID: 8248
// Function ID: 8249
// Dependencies: []

// Module 8248
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
