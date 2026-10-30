// Module ID: 8305
// Function ID: 8306
// Dependencies: []

// Module 8305
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
