// Module ID: 7390
// Function ID: 7391
// Dependencies: []

// Module 7390
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
