// Module ID: 38
// Function ID: 1275
// Name: processColor
// Dependencies: [39, 40]

// Module 38 (processColor)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function processColor(defaultResult1) {
  if (null == defaultResult1) {
    return defaultResult1;
  } else {
    const defaultResult = require(39) /* normalizeColor */.default(defaultResult1);
    if (null != defaultResult) {
      if ("object" === typeof defaultResult) {
        const processColorObjectResult = require(40) /* PlatformColor */.processColorObject(defaultResult);
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
    const obj = require(39) /* normalizeColor */;
  }
};
