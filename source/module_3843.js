// Module ID: 3843
// Function ID: 32021
// Dependencies: []

// Module 3843
const keys = Object.keys(require(dependencyMap[0]));
const item = keys.forEach((arg0) => {
  const require = arg0;
  let callResult = "default" === arg0;
  if (!callResult) {
    const _Object = Object;
    callResult = hasOwnProperty.call(exports, arg0);
  }
  if (!callResult) {
    const _Object2 = Object;
    const obj = {
      enumerable: true,
      get() {
          return arg0(closure_2[0])[closure_0];
        }
    };
    Object.defineProperty(exports, arg0, obj);
  }
});
const keys1 = Object.keys(require(dependencyMap[1]));
const item1 = keys1.forEach((arg0) => {
  const require = arg0;
  let callResult = "default" === arg0;
  if (!callResult) {
    const _Object = Object;
    callResult = hasOwnProperty.call(exports, arg0);
  }
  if (!callResult) {
    const _Object2 = Object;
    const obj = {
      enumerable: true,
      get() {
          return arg0(closure_2[1])[closure_0];
        }
    };
    Object.defineProperty(exports, arg0, obj);
  }
});
