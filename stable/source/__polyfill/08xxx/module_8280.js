// Module ID: 8280
// Function ID: 8281
// Dependencies: []

// Module 8280
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
