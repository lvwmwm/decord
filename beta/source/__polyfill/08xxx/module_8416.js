// Module ID: 8416
// Function ID: 8417
// Dependencies: []

// Module 8416
const obj = {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};

export default obj;
