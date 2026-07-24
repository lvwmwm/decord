// Module ID: 3877
// Function ID: 32145
// Name: getHostComponent
// Dependencies: [27, 42]
// Exports: callback, getHostComponent

// Module 3877 (getHostComponent)
import { Platform } from "get ActivityIndicator";


export const getHostComponent = function getHostComponent(RiveView, arg1) {
  const importAll = arg1;
  if (null == importAll(42)) {
    const _Error = Error;
    const error = new Error("NativeComponentRegistry is not available on android!");
    throw error;
  } else {
    return importAll(42).get(RiveView, () => {
      const tmp = callback();
      tmp.validAttributes = (function wrapValidAttributes(validAttributes) {
        const keys = Object.keys(validAttributes);
        for (const item10009 of keys) {
          let tmp3 = arg0;
          let obj = {
            diff(arg0, arg1) {
                return arg0 !== arg1;
              },
            process(arg0) {
                return arg0;
              }
          };
          arg0[item10009] = obj;
          continue;
        }
        return validAttributes;
      })(tmp.validAttributes);
      return tmp;
    });
  }
};
export const callback = function callback(f) {
  let tmp = f;
  if ("function" === typeof f) {
    const obj = { f };
    tmp = obj;
  }
  return tmp;
};
