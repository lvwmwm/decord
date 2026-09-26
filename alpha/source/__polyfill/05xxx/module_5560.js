// Module ID: 5560
// Function ID: 5561
// Dependencies: []

// Module 5560

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
