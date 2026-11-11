// Module ID: 8906
// Function ID: 8907
// Dependencies: []

// Module 8906
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
