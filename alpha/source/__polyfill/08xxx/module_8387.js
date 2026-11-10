// Module ID: 8387
// Function ID: 8388
// Dependencies: []

// Module 8387
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
