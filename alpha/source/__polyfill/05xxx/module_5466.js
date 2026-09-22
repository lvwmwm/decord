// Module ID: 5466
// Function ID: 5467
// Dependencies: []

// Module 5466

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
