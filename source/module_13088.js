// Module ID: 13088
// Function ID: 99424
// Dependencies: []

// Module 13088
arg5.shouldPolyfill = undefined;
arg5.supportedValuesOf = undefined;
let obj = {
  enumerable: true,
  get() {
    return arg1(arg6[0]).shouldPolyfill;
  }
};
Object.defineProperty(arg5, "shouldPolyfill", obj);
obj = {
  enumerable: true,
  get() {
    return arg1(arg6[1]).supportedValuesOf;
  }
};
Object.defineProperty(arg5, "supportedValuesOf", obj);
