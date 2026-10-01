// Module ID: 5560
// Function ID: 5561
// Dependencies: []

// Module 5560
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
