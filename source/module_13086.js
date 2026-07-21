// Module ID: 13086
// Function ID: 99402
// Dependencies: []

// Module 13086
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
