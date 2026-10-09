// Module ID: 7843
// Function ID: 7844
// Dependencies: []

// Module 7843
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
