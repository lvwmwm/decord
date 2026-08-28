// Module ID: 13864
// Function ID: 13865
// Dependencies: [13865, 13866]

// Module 13864
const require = arg1;
const dependencyMap = arg6;
arg5.shouldPolyfill = undefined;
arg5.supportedValuesOf = undefined;
let obj = {
  enumerable: true,
  get() {
    return require(13865) /* shouldPolyfill */.shouldPolyfill;
  }
};
Object.defineProperty(arg5, "shouldPolyfill", obj);
obj = {
  enumerable: true,
  get() {
    return require(13866) /* supportedValuesOf */.supportedValuesOf;
  }
};
Object.defineProperty(arg5, "supportedValuesOf", obj);
