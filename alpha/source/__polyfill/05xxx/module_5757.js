// Module ID: 5757
// Function ID: 5758
// Dependencies: []

// Module 5757

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
