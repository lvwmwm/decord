// Module ID: 39
// Function ID: 1277
// Name: normalizeColor
// Dependencies: [40, 41]

// Module 39 (normalizeColor)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = function normalizeColor(arg0) {
  if ("object" === typeof arg0) {
    if (null != arg0) {
      const normalizeColorObjectResult = require(40) /* PlatformColor */.normalizeColorObject(arg0);
      if (null != normalizeColorObjectResult) {
        return normalizeColorObjectResult;
      }
    }
  }
  return module(41)(arg0);
};
