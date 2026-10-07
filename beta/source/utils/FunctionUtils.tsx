// Module ID: 2026
// Function ID: 2027
// Name: FunctionUtils
// Dependencies: [2]
// Exports: areArraysShallowlyEqual, cachedFunction, clearObject, isPlainObjectEmpty

// Module 2026 (FunctionUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/FunctionUtils.tsx");

export const areArraysShallowlyEqual = function areArraysShallowlyEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    if (null != arg0) {
      if (null != arg1) {
        if (arg0.length === arg1.length) {
          let num = 0;
          if (0 < arg0.length) {
            while (arg0[num] === arg1[num]) {
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
};
export function cachedFunction(arg0) {
  let closure_0 = arg0;
  let items = null;
  let closure_2 = null;
  return () => {
    items = [...arguments];
    let flag = true;
    if (items !== items) {
      flag = false;
      if (null != items) {
        flag = false;
        if (null != items) {
          flag = false;
          if (items.length === items.length) {
            let num2 = 0;
            flag = true;
            if (0 < items.length) {
              flag = false;
              while (items[num2] === items[num2]) {
                let sum = num2 + 1;
                num2 = sum;
                flag = true;
                if (sum >= length) {
                  break;
                }
              }
            }
          }
        }
      }
    }
    if (!flag) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, items, 0);
      closure_2 = HermesBuiltin.apply(closure_0, items1, undefined);
    }
    return closure_2;
  };
}
export const clearObject = function clearObject(obj) {
  for (const key10003 in obj) {
    let tmp2 = key10003;
    if (!obj.hasOwnProperty(key10003)) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
};
export const isPlainObjectEmpty = function isPlainObjectEmpty(arg0) {
  const keys = Object.keys();
  if (keys !== undefined) {
    if (keys[tmp] !== undefined) {
      return false;
    }
  }
  return true;
};
