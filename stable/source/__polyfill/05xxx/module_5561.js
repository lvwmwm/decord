// Module ID: 5561
// Function ID: 5562
// Dependencies: []

// Module 5561
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
