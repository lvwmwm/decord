// Module ID: 8437
// Function ID: 8438
// Dependencies: []

// Module 8437
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
