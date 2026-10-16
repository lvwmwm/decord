// Module ID: 7857
// Function ID: 7858
// Dependencies: []

// Module 7857
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
