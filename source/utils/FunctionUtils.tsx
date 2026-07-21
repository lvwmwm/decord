// Module ID: 1916
// Function ID: 21591
// Name: areArraysShallowlyEqual
// Dependencies: [284214097]
// Exports: cachedFunction, clearObject, isPlainObjectEmpty

// Module 1916 (areArraysShallowlyEqual)
function areArraysShallowlyEqual(arg0, arg1) {
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
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/FunctionUtils.tsx");

export { areArraysShallowlyEqual };
export function cachedFunction(arg0) {
  const areArraysShallowlyEqual = arg0;
  let closure_1 = null;
  let closure_2 = null;
  return (arg0) => {
    const items = [...arguments];
    if (!arg0(closure_1, items)) {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      let closure_2 = HermesBuiltin.apply(items1, undefined);
    }
    closure_1 = items;
    return closure_2;
  };
}
export const clearObject = function clearObject(obj) {
  for (const key10003 in arg0) {
    let tmp = key10003;
    if (!arg0.hasOwnProperty(key10003)) {
      continue;
    } else {
      delete r5[r6];
      // continue
    }
    continue;
  }
};
export function isPlainObjectEmpty(arg0) {
  const keys = Object.keys();
  if (keys !== undefined) {
    if (keys[tmp] !== undefined) {
      return false;
    }
  }
  return true;
}
