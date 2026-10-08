// Module ID: 7834
// Function ID: 7835
// Dependencies: []

// Module 7834
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
