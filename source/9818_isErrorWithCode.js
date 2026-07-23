// Module ID: 9818
// Function ID: 76185
// Name: isErrorWithCode
// Dependencies: []

// Module 9818 (isErrorWithCode)
arg5.errorCodes = Object.freeze({ OPERATION_CANCELED: "OPERATION_CANCELED", IN_PROGRESS: "ASYNC_OP_IN_PROGRESS", UNABLE_TO_OPEN_FILE_TYPE: "UNABLE_TO_OPEN_FILE_TYPE" });
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
