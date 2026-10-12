// Module ID: 7862
// Function ID: 7863
// Dependencies: []

// Module 7862
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
