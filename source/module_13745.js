// Module ID: 13745
// Function ID: 13746
// Dependencies: [13746, 13747]

// Module 13745
const require = arg1;
const dependencyMap = arg6;
arg5.shouldPolyfill = undefined;
arg5.supportedValuesOf = undefined;
let obj = {
  enumerable: true,
  get() {
    return require(13746) /* shouldPolyfill */.shouldPolyfill;
  }
};
Object.defineProperty(arg5, "shouldPolyfill", obj);
obj = {
  enumerable: true,
  get() {
    return require(13747) /* supportedValuesOf */.supportedValuesOf;
  }
};
Object.defineProperty(arg5, "supportedValuesOf", obj);
