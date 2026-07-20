// Module ID: 9805
// Function ID: 76104
// Name: isErrorWithCode
// Dependencies: []

// Module 9805 (isErrorWithCode)
arg5.errorCodes = Object.freeze({ forceHideSimpleEmbedContent: 24, enableSwipeActions: 32, useAlternateEmbedColors: null });
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
