// Module ID: 4478
// Function ID: 39515
// Name: isIndexInClosedRange
// Dependencies: []
// Exports: assertDetentsArrayIsSorted, resolveSheetAllowedDetents, resolveSheetInitialDetentIndex, resolveSheetLargestUndimmedDetent

// Module 4478 (isIndexInClosedRange)
function isIndexInClosedRange(SHEET_DIMMED_ALWAYS, arg1, arg2) {
  let isIntegerResult = Number.isInteger(SHEET_DIMMED_ALWAYS);
  if (isIntegerResult) {
    isIntegerResult = SHEET_DIMMED_ALWAYS >= arg1;
  }
  if (isIntegerResult) {
    isIntegerResult = SHEET_DIMMED_ALWAYS <= arg2;
  }
  return isIntegerResult;
}
const Platform = require(dependencyMap[0]).Platform;
const items = [-1];
const items1 = [24573934974154670000000000000000000000000000000000000000000000000000000000000];
const items2 = ["<string:2558152960>"];
const items3 = [];

export const SHEET_FIT_TO_CONTENTS = items;
export const SHEET_COMPAT_LARGE = items1;
export const SHEET_COMPAT_MEDIUM = items2;
export const SHEET_COMPAT_ALL = items3;
export const SHEET_DIMMED_ALWAYS = -1;
export const assertDetentsArrayIsSorted = function assertDetentsArrayIsSorted(arg0) {
  let num = 1;
  if (1 < arg0.length) {
    while (arg0[num - 1] <= arg0[num]) {
      num = num + 1;
    }
    const _Error = Error;
    const error = new Error("[RNScreens] The detent array is not sorted in ascending order!");
    throw error;
  }
};
export const resolveSheetAllowedDetents = function resolveSheetAllowedDetents(sheetAllowedDetents) {
  if (Array.isArray(sheetAllowedDetents)) {
    let substr = sheetAllowedDetents;
    if (sheetAllowedDetents.length > 3) {
      substr = sheetAllowedDetents.slice(0, 3);
    }
    let tmp = substr;
  } else if ("fitToContents" === sheetAllowedDetents) {
    tmp = items;
  } else if ("large" === sheetAllowedDetents) {
    tmp = items1;
  } else if ("medium" === sheetAllowedDetents) {
    tmp = items2;
  } else {
    tmp = "all" === sheetAllowedDetents ? items3 : items1;
  }
  return tmp;
};
export const resolveSheetLargestUndimmedDetent = function resolveSheetLargestUndimmedDetent(SHEET_DIMMED_ALWAYS, arg1) {
  if ("number" === typeof SHEET_DIMMED_ALWAYS) {
    let num4 = -1;
    if (isIndexInClosedRange(SHEET_DIMMED_ALWAYS, -1, arg1)) {
      num4 = SHEET_DIMMED_ALWAYS;
    }
    let tmp = num4;
  } else {
    tmp = arg1;
    if ("last" !== SHEET_DIMMED_ALWAYS) {
      let num = -1;
      let num2 = -1;
      if ("none" !== SHEET_DIMMED_ALWAYS) {
        num2 = num;
        if ("all" !== SHEET_DIMMED_ALWAYS) {
          let num3 = 1;
          if ("large" !== SHEET_DIMMED_ALWAYS) {
            if ("medium" === SHEET_DIMMED_ALWAYS) {
              num = 0;
            }
            num3 = num;
          }
          num2 = num3;
        }
      }
      tmp = num2;
    }
  }
  return tmp;
};
export const resolveSheetInitialDetentIndex = function resolveSheetInitialDetentIndex(SHEET_DIMMED_ALWAYS, arg1) {
  let num = arg1;
  if ("last" !== SHEET_DIMMED_ALWAYS) {
    num = SHEET_DIMMED_ALWAYS;
    if (null == SHEET_DIMMED_ALWAYS) {
      num = 0;
    }
  }
  let num2 = 0;
  if (isIndexInClosedRange(num, 0, arg1)) {
    num2 = num;
  }
  return num2;
};
