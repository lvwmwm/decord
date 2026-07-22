// Module ID: 13095
// Function ID: 99457
// Dependencies: []

// Module 13095
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
