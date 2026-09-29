// Module ID: 5727
// Function ID: 5728
// Dependencies: []

// Module 5727

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
