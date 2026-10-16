// Module ID: 8083
// Function ID: 8084
// Dependencies: []

// Module 8083
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
