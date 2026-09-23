// Module ID: 5550
// Function ID: 5551
// Dependencies: []

// Module 5550

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
