// Module ID: 7869
// Function ID: 7870
// Dependencies: []

// Module 7869
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
