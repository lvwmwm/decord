// Module ID: 8129
// Function ID: 8130
// Dependencies: []

// Module 8129
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
