// Module ID: 5328
// Function ID: 5329
// Dependencies: []

// Module 5328

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
