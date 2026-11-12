// Module ID: 8905
// Function ID: 8906
// Dependencies: []

// Module 8905
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
