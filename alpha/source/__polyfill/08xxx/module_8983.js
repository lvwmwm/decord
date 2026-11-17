// Module ID: 8983
// Function ID: 8984
// Dependencies: []

// Module 8983
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
