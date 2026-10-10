// Module ID: 7861
// Function ID: 7862
// Dependencies: []

// Module 7861
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
