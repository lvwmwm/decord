// Module ID: 1801
// Function ID: 1802
// Dependencies: [1665]
// Exports: processColorOrPlatformColorSVG

// Module 1801
import _mod1665 from "module_1665" /* 1665 */;

const ERROR_MESSAGES = {
  invalidColor(arg0) {
    return "Invalid color value: " + JSON.stringify(arg0);
  }
};
function processColorSVG(color) {
  const obj = _mod1665;
  const processColorNumberResult = obj.processColorNumber(color);
  if ("none" === color) {
    return 0;
  } else if (null !== processColorNumberResult) {
    return (0 !== processColorNumberResult || "transparent" !== color) && processColorNumberResult;
  } else if ("currentColor" === color) {
    return "currentColor";
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] " + obj.invalidColor(color));
    throw error;
  }
}

export { ERROR_MESSAGES };
export { processColorSVG };
export const processColorOrPlatformColorSVG = function(color, arg1) {
  let str2;
  if (typeof color === "object") {
    if (null !== color) {
      const obj2 = _mod1665;
      str2 = obj2.processColor(color);
    }
    return str2;
  }
  if (typeof processColorSVG === "function") {
    const obj = _mod1665;
    const processColorNumberResult = obj.processColorNumber(color);
    str2 = 0;
    if ("none" !== color) {
      if (null !== processColorNumberResult) {
        str2 = (0 !== processColorNumberResult || "transparent" !== color) && processColorNumberResult;
        const tmp9 = (0 !== processColorNumberResult || "transparent" !== color) && processColorNumberResult;
      } else {
        str2 = "currentColor";
        if ("currentColor" !== color) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("[Reanimated] " + obj.invalidColor(color));
          throw error;
        }
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
