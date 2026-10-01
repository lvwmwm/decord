// Module ID: 50
// Function ID: 51
// Name: processColor
// Dependencies: [51, 52]
// Exports: default

// Module 50 (processColor)
import normalizeColor from "normalizeColor" /* 51 */;


export default function processColor(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const obj = normalizeColor;
    const defaultResult = obj.default(arg0);
    const tmp = require;
    if (null != defaultResult) {
      if (typeof defaultResult === "object") {
        const processColorObjectResult = tmp(52).processColorObject(defaultResult);
        if (null != processColorObjectResult) {
          return processColorObjectResult;
        }
      }
      let tmp4 = null;
      if (typeof defaultResult === "number") {
        tmp4 = (defaultResult << 24 | defaultResult >>> 8) >>> 0 | 0;
      }
      return tmp4;
    }
  }
};
