// Module ID: 5746
// Function ID: 5747
// Dependencies: []

// Module 5746

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
