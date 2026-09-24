// Module ID: 5498
// Function ID: 5499
// Dependencies: []

// Module 5498

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
