// Module ID: 10250
// Function ID: 79221
// Name: isObject
// Dependencies: [284214097]

// Module 10250 (isObject)
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
  const items = [...arguments];
  return items.reduce((arg0, arg1) => {
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
        const items = [];
        if (!items.includes(arg0)) {
          let tmp = globalThis;
          const _Array = Array;
          if (Array.isArray(arg0[arg0])) {
            const _Array2 = Array;
            if (Array.isArray(arg1[arg0])) {
              if (lib.options.mergeArrays) {
                ({ Array: _Array3, Set: _Set } = tmp);
                const prototype = _Set.prototype;
                tmp = new.target;
                _Set = new _Set(arg0[arg0].concat(arg1[arg0]));
                let fromResult = _Array3.from(_Set);
                const obj = arg0[arg0];
              } else {
                fromResult = arg1[arg0];
              }
              arg0[arg0] = fromResult;
              const tmp13 = arg0;
            }
          }
          if (arg1(arg0[arg0])) {
            if (arg1(arg1[arg0])) {
              arg0[arg0] = lib(arg0[arg0], arg1[arg0]);
            }
          }
          arg0[arg0] = arg1[arg0];
        }
      });
      return arg0;
    }
  }, {});
}
const obj = { mergeArrays: true };
merge.options = obj;
merge.withOptions = (arg0, arg1) => {
  const substr = [...arguments].slice();
  const obj = { mergeArrays: true };
  const merged = Object.assign(arg0);
  merge.options = obj;
  merge.options = obj;
  return merge(...substr);
};
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx");

export default merge;
