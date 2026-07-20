// Module ID: 38
// Function ID: 1275
// Name: processColor
// Dependencies: []

// Module 38 (processColor)
arg5.default = function processColor(defaultResult1) {
  if (null == defaultResult1) {
    return defaultResult1;
  } else {
    const defaultResult = arg1(arg6[0]).default(defaultResult1);
    if (null != defaultResult) {
      if ("object" === typeof defaultResult) {
        const processColorObjectResult = arg1(arg6[1]).processColorObject(defaultResult);
        if (null != processColorObjectResult) {
          return processColorObjectResult;
        }
      }
      let tmp5 = null;
      if ("number" === typeof defaultResult) {
        tmp5 = (defaultResult << 24 | defaultResult >>> 8) >>> 0 | 0;
      }
      return tmp5;
    }
    const obj = arg1(arg6[0]);
  }
};
