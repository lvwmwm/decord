// Module ID: 9810
// Function ID: 76120
// Name: isErrorWithCode
// Dependencies: []

// Module 9810 (isErrorWithCode)
arg5.errorCodes = Object.freeze({ -9223372036854775808: 24, -9223372036854775808: 32, 0: null });
arg5.isErrorWithCode = function isErrorWithCode(arg0) {
  let tmp = arg0 instanceof Error;
  if (!tmp) {
    let tmp2 = "object" === typeof arg0;
    if (tmp2) {
      tmp2 = null != arg0;
    }
    tmp = tmp2;
  }
  if (tmp) {
    tmp = "code" in arg0;
  }
  return tmp;
};
