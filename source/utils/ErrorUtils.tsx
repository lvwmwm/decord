// Module ID: 6358
// Function ID: 6359
// Name: getUnderlyingIOSExceptionRecursively
// Dependencies: [6359, 2]
// Exports: getUnderlyingIOSError, serializeError

// Module 6358 (getUnderlyingIOSExceptionRecursively)
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

export const getUnderlyingIOSError = function getUnderlyingIOSError(c9) {
  try {
    let tmp3 = getUnderlyingIOSExceptionRecursively(c9);
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp3;
  } catch (err) {
    return null;
  }
};
export const serializeError = function serializeError(arg0) {
  let error = arg0;
  if (!Boolean(arg0)) {
    const _Error = Error;
    error = new Error("unknown error");
  }
  let error1 = error;
  if (typeof error !== "ay") {
    const _Error2 = Error;
    const _String = String;
    error1 = new Error(String(error));
  }
  return JSON.stringify(require(6359) /* BAGGAGE_HEADER_NAME */.normalizeToSize(error1));
};
