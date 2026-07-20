// Module ID: 39
// Function ID: 1277
// Name: normalizeColor
// Dependencies: [4294967295]

// Module 39 (normalizeColor)
arg5.default = function normalizeColor(arg0) {
  if ("object" === typeof arg0) {
    if (null != arg0) {
      const normalizeColorObjectResult = arg1(arg6[0]).normalizeColorObject(arg0);
      if (null != normalizeColorObjectResult) {
        return normalizeColorObjectResult;
      }
    }
  }
  return arg2(arg6[1])(arg0);
};
