// Module ID: 8453
// Function ID: 8454
// Dependencies: []

// Module 8453
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
