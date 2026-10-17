// Module ID: 14416
// Function ID: 14417
// Name: ErrorUtils
// Dependencies: [14417, 2]
// Exports: getUnderlyingIOSError, serializeError

// Module 14416 (ErrorUtils)
import _mod14417 from "module_14417" /* 14417 */;
import size from "module_2" /* 2 */;

function getUnderlyingIOSExceptionRecursively(NSUnderlyingError) {
  if (null != NSUnderlyingError.userInfo.NSUnderlyingError) {
    const tmp2 = getUnderlyingIOSExceptionRecursively(NSUnderlyingError.userInfo.NSUnderlyingError);
    if (null != tmp2) {
      return tmp2;
    }
  }
  return NSUnderlyingError.userInfo.NSLocalizedDescription;
}
const result = size.fileFinishedImporting("utils/ErrorUtils.tsx");

export const getUnderlyingIOSError = function getUnderlyingIOSError(message) {
  try {
    const tmp3 = getUnderlyingIOSExceptionRecursively(message) ?? null;
    return tmp3;
  } catch (err) {
    return null;
  }
};
export const serializeError = function serializeError(arg0) {
  let error = arg0;
  if (!Boolean(arg0)) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    error = new Error("unknown error");
  }
  let error1 = error;
  if (typeof error !== "object") {
    const _Error2 = Error;
    const _String = String;
    const self3 = this;
    const self4 = this;
    error1 = new Error(String(error));
  }
  const obj = _mod14417;
  return stringify(obj.normalizeToSize(error1));
};
