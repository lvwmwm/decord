// Module ID: 5554
// Function ID: 5555
// Dependencies: []

// Module 5554

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
