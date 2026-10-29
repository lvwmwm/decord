// Module ID: 8302
// Function ID: 8303
// Dependencies: []

// Module 8302
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
