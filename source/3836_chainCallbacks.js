// Module ID: 3836
// Function ID: 31991
// Name: chainCallbacks
// Dependencies: []
// Exports: mergeProps, mergeRefs

// Module 3836 (chainCallbacks)
function chainCallbacks(arg0, arg1) {
  let closure_0 = [...arguments];
  return (arg0) => {
    const items = [...arguments];
    let num = 0;
    if (0 < length.length) {
      do {
        let tmp = arr2[num];
        if ("function" === typeof tmp) {
          let items1 = [];
          let tmp2 = items1;
          let tmp3 = items;
          let num2 = 0;
          let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
          let tmp5 = tmp;
          let tmp6 = items1;
          let applyResult = HermesBuiltin.apply(items1, undefined);
        }
        num = num + 1;
      } while (num < arr2.length);
    }
  };
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("design/utils/native/mergeProps.native.tsx");

export { chainCallbacks };
export const mergeRefs = function mergeRefs(closure_18, photosButtonExternalRef) {
  const items = [...arguments];
  return 1 === items.length ? items[0] : (current) => {
    let num = 0;
    if (0 < items.length) {
      do {
        let tmp = arr[num];
        if ("function" === typeof tmp) {
          let tmpResult = tmp(current);
        } else if (null != tmp) {
          tmp.current = current;
        }
        num = num + 1;
      } while (num < arr.length);
    }
  };
};
export const mergeProps = function mergeProps(inputProps, focusProps, arg2) {
  const items = [...arguments];
  const obj = {};
  const merged = Object.assign(items[0]);
  for (let num = 1; num < items.length; num = num + 1) {
    let tmp6 = items[num];
    let tmp7 = tmp6;
    let tmp8 = tmp3;
    let tmp9 = tmp4;
    let tmp10 = tmp5;
    let keys = Object.keys();
    if (keys !== undefined) {
      let tmp3 = tmp8;
      let tmp4 = tmp9;
      let tmp5 = tmp10;
      let obj2 = keys[tmp];
      while (obj2 !== undefined) {
        let tmp14 = obj2;
        let obj3 = obj[obj2];
        let tmp15 = tmp6[obj2];
        if ("function" === typeof obj3) {
          if ("function" === typeof tmp15) {
            if ("o" === obj2[0]) {
              if ("n" === obj2[1]) {
                if (obj2.charCodeAt(2) >= 65) {
                  if (obj2.charCodeAt(2) <= 90) {
                    let tmp13 = chainCallbacks;
                    obj[obj2] = chainCallbacks(obj3, tmp15);
                    tmp8 = obj2;
                    tmp9 = obj3;
                    tmp10 = tmp15;
                    // continue
                  }
                }
              }
            }
          }
        }
        if ("style" === obj2) {
          let combined = obj3.concat(tmp15);
        } else {
          combined = obj3;
          if (undefined !== tmp15) {
            combined = tmp15;
          }
        }
        obj[obj2] = combined;
        tmp8 = obj2;
        tmp9 = obj3;
        tmp10 = tmp15;
        // continue
      }
    }
  }
  return obj;
};
