// Module ID: 7379
// Function ID: 7380
// Dependencies: []

// Module 7379
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
