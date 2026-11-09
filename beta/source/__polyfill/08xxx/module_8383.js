// Module ID: 8383
// Function ID: 8384
// Dependencies: []

// Module 8383
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
