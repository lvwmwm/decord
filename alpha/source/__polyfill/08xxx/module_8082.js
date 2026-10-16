// Module ID: 8082
// Function ID: 8083
// Dependencies: []

// Module 8082
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
