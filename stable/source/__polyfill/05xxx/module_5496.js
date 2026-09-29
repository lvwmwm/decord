// Module ID: 5496
// Function ID: 5497
// Dependencies: []

// Module 5496

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
