// Module ID: 8196
// Function ID: 8197
// Dependencies: []

// Module 8196
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
