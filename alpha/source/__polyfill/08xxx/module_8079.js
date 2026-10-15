// Module ID: 8079
// Function ID: 8080
// Dependencies: []

// Module 8079
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
