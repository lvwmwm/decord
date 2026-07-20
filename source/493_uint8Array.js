// Module ID: 493
// Function ID: 6422
// Name: uint8Array
// Dependencies: []

// Module 493 (uint8Array)
const uint8Array = new Uint8Array(16);
arg5.default = function rng() {
  if (!getRandomValues) {
    const _crypto = crypto;
    let getRandomValues = "undefined" !== typeof crypto;
    if (getRandomValues) {
      const _crypto2 = crypto;
      getRandomValues = crypto.getRandomValues;
    }
    if (getRandomValues) {
      const _crypto3 = crypto;
      const _crypto4 = crypto;
      getRandomValues = getRandomValues2.bind(crypto);
    }
    if (!getRandomValues) {
      const _Error = Error;
      const error = new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      throw error;
    }
  }
  return getRandomValues(uint8Array);
};
