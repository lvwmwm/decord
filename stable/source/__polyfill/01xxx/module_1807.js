// Module ID: 1807
// Function ID: 1808
// Dependencies: [1758]
// Exports: processStrokeDashArray

// Module 1807
import _mod1758 from "module_1758" /* 1758 */;

const ERROR_MESSAGES = {
  invalidDashArray(arg0) {
    return "Invalid stroke dash array value: " + JSON.stringify(arg0);
  }
};

export { ERROR_MESSAGES };
export const processStrokeDashArray = function(arg0) {
  let arr2;
  const obj = _mod1758;
  if (obj.isLength(arg0)) {
    const items = [arg0];
    arr2 = items;
  } else {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, arg0, 0);
      arr2 = items1;
    } else if ("none" === arg0) {
      return "none";
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("[Reanimated] " + obj.invalidDashArray(arg0));
      throw error;
    }
  }
  let combined = arr2;
  if (arr2.length % 2 === 1) {
    combined = arr2.concat(arr2);
  }
  return combined;
};
