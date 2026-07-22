// Module ID: 3875
// Function ID: 32139
// Name: getHostComponent
// Dependencies: [0, 4294967295]
// Exports: callback, getHostComponent

// Module 3875 (getHostComponent)
import { Platform } from "__exportStarResult1";


export const getHostComponent = function getHostComponent(RiveView, arg1) {
  const importAll = arg1;
  if (null == importAll(dependencyMap[1])) {
    const _Error = Error;
    const error = new Error("NativeComponentRegistry is not available on android!");
    throw error;
  } else {
    return importAll(dependencyMap[1]).get(RiveView, () => {
      const tmp = arg1();
      tmp.validAttributes = function wrapValidAttributes(validAttributes) {
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
        }
        return validAttributes;
      }(tmp.validAttributes);
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
