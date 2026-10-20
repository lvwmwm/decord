// Module ID: 8192
// Function ID: 8193
// Dependencies: []

// Module 8192
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
