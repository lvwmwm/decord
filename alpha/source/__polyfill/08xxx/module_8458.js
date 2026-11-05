// Module ID: 8458
// Function ID: 8459
// Dependencies: []

// Module 8458
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
