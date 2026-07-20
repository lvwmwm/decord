// Module ID: 13205
// Function ID: 100185
// Dependencies: []

// Module 13205
let closure_1 = {};
const tmp2 = function _interopRequireWildcard(__esModule) {
  if ("function" === typeof WeakMap) {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
  }
  if (!__esModule) {
    const obj = Object.create(null);
    obj.default = __esModule;
    let value = obj;
    if (null !== __esModule) {
      if ("object" === typeof __esModule) {
        if (!weakMap) {
          value = obj;
          const keys = Object.keys();
          if (keys !== undefined) {
            value = obj;
            while (keys[tmp] !== undefined) {
              let tmp22 = tmp13;
              let callResult = "default" !== tmp13;
              if (callResult) {
                let hasOwnProperty = {}.hasOwnProperty;
                callResult = hasOwnProperty.call(__esModule, tmp13);
              }
              if (!callResult) {
                continue;
              } else {
                let _Object = Object;
                let ownPropertyDescriptor = defineProperty;
                if (defineProperty) {
                  let _Object2 = Object;
                  ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, tmp13);
                }
                if (!ownPropertyDescriptor) {
                  obj[tmp13] = __esModule[tmp13];
                  let tmp16 = defineProperty;
                  let tmp17 = ownPropertyDescriptor;
                  // continue
                } else {
                  let definePropertyResult = defineProperty(obj, tmp13, ownPropertyDescriptor);
                  let tmp19 = defineProperty;
                  let tmp20 = ownPropertyDescriptor;
                  // continue
                }
                continue;
              }
              continue;
            }
          }
        } else if (weakMap.has(__esModule)) {
          value = weakMap.get(__esModule);
        } else {
          const result = weakMap.set(__esModule, obj);
        }
      } else {
        value = obj;
      }
    }
  } else {
    value = __esModule;
  }
  return value;
}(require(dependencyMap[0]));
const keys = Object.keys(tmp2);
const item = keys.forEach((arg0) => {
  const exports = arg0;
  let tmp = "default" !== arg0;
  if (tmp) {
    tmp = "__esModule" !== arg0;
  }
  if (tmp) {
    const _Object = Object;
    let callResult = hasOwnProperty.call(closure_1, arg0);
    if (!callResult) {
      let tmp6 = arg0 in exports;
      if (tmp6) {
        tmp6 = exports[arg0] === tmp2[arg0];
      }
      callResult = tmp6;
    }
    if (!callResult) {
      const _Object2 = Object;
      const obj = {
        enumerable: true,
        get() {
              return closure_2[closure_0];
            }
      };
      Object.defineProperty(exports, arg0, obj);
    }
  }
});

export default tmp2.default;
