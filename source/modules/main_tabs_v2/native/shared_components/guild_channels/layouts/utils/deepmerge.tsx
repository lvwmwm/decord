// Module ID: 10292
// Function ID: 79504
// Name: isObject
// Dependencies: [2]

// Module 10292 (isObject)
function isObject(arg0) {
  if ("object" === typeof arg0) {
    if (null !== arg0) {
      const _Object = Object;
      if ("function" === typeof Object.getPrototypeOf) {
        const _Object3 = Object;
        const prototypeOf = Object.getPrototypeOf(arg0);
        const _Object4 = Object;
        return prototypeOf === Object.prototype || null === prototypeOf;
      } else {
        const _Object2 = Object;
        return "[object Object]" === toString.call(arg0);
      }
    }
  }
  return false;
}
function merge(arg0) {
  let items = [...arguments];
  return items.reduce((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (Array.isArray(arg1)) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
      throw typeError;
    } else {
      const _Object = Object;
      const keys = Object.keys(arg1);
      const item = keys.forEach((arg0) => {
        let _Array3;
        let _Set;
        const items = ["__proto__", "constructor", "prototype"];
        if (!items.includes(arg0)) {
          let tmp = globalThis;
          const _Array = Array;
          if (Array.isArray(dependencyMap[arg0])) {
            const _Array2 = Array;
            if (Array.isArray(dependencyMap2[arg0])) {
              if (outer2_2.options.mergeArrays) {
                ({ Array: _Array3, Set: _Set } = tmp);
                const prototype = _Set.prototype;
                tmp = new.target;
                _Set = new _Set(dependencyMap[arg0].concat(dependencyMap2[arg0]));
                let fromResult = _Array3.from(_Set);
                const obj = dependencyMap[arg0];
              } else {
                fromResult = dependencyMap2[arg0];
              }
              dependencyMap[arg0] = fromResult;
              const tmp13 = dependencyMap;
            }
          }
          if (outer2_1(dependencyMap[arg0])) {
            if (outer2_1(dependencyMap2[arg0])) {
              dependencyMap[arg0] = outer2_2(dependencyMap[arg0], dependencyMap2[arg0]);
            }
          }
          dependencyMap[arg0] = dependencyMap2[arg0];
        }
      });
      return arg0;
    }
  }, {});
}
let obj = { mergeArrays: true };
merge.options = obj;
merge.withOptions = (arg0, arg1) => {
  const substr = [...arguments].slice();
  const obj = { mergeArrays: true };
  const merged = Object.assign(arg0);
  merge.options = obj;
  merge.options = obj;
  return merge(...substr);
};
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx");

export default merge;
