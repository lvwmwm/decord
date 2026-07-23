// Module ID: 7229
// Function ID: 58236
// Name: getUnderlyingIOSExceptionRecursively
// Dependencies: [7230, 2]
// Exports: getUnderlyingIOSError, serializeError

// Module 7229 (getUnderlyingIOSExceptionRecursively)
function getUnderlyingIOSExceptionRecursively(NSUnderlyingError) {
  if (null != NSUnderlyingError.userInfo.NSUnderlyingError) {
    const tmp2 = getUnderlyingIOSExceptionRecursively(NSUnderlyingError.userInfo.NSUnderlyingError);
    if (null != tmp2) {
      return tmp2;
    }
  }
  return NSUnderlyingError.userInfo.NSLocalizedDescription;
}
const result = require("set").fileFinishedImporting("utils/ErrorUtils.tsx");

export const getUnderlyingIOSError = function getUnderlyingIOSError(code) {
  const tmp = getUnderlyingIOSExceptionRecursively(code);
  let tmp2 = null;
  if (null != tmp) {
    tmp2 = tmp;
  }
  return tmp2;
};
export const serializeError = function serializeError(arg0) {
  let error = arg0;
  if (!Boolean(arg0)) {
    const _Error = Error;
    error = new Error("unknown error");
  }
  let error1 = error;
  if ("object" !== typeof error) {
    const _Error2 = Error;
    const _String = String;
    error1 = new Error(String(error));
  }
  return JSON.stringify(require(7230) /* BAGGAGE_HEADER_NAME */.normalizeToSize(error1));
};
