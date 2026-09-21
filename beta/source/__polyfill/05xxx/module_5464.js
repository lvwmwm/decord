// Module ID: 5464
// Function ID: 5465
// Dependencies: []

// Module 5464

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
