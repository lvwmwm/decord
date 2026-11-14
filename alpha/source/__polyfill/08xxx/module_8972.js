// Module ID: 8972
// Function ID: 8973
// Dependencies: []

// Module 8972
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
