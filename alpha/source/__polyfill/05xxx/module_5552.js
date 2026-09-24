// Module ID: 5552
// Function ID: 5553
// Dependencies: []

// Module 5552

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
