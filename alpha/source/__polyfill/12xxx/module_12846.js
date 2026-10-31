// Module ID: 12846
// Function ID: 12847
// Dependencies: []
// Exports: decode, encode

// Module 12846
const length = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");

export const encode = (arg0) => {
  if (0 <= arg0) {
    if (arg0 < length.length) {
      return length[arg0];
    }
  }
  const typeError = new TypeError("Must be between 0 and 63: " + arg0);
  throw typeError;
};
export const decode = (arg0) => {
  let num4;
  if (65 <= arg0) {
    if (arg0 <= 90) {
      num4 = arg0 - 65;
    }
    return num4;
  }
  if (97 <= arg0) {
    if (arg0 <= 122) {
      num4 = arg0 - 97 + 26;
    }
  }
  if (48 <= arg0) {
    if (arg0 <= 57) {
      num4 = arg0 - 48 + 52;
    }
  }
  num4 = 62;
  if (43 != arg0) {
    let num6 = -1;
    if (47 == arg0) {
      num6 = 63;
    }
    num4 = num6;
  }
};
