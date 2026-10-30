// Module ID: 15189
// Function ID: 15190
// Name: ErrorUtils
// Dependencies: [15190, 2]
// Exports: getUnderlyingIOSError, serializeError

// Module 15189 (ErrorUtils)
import _mod15190 from "module_15190" /* 15190 */;
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

export function getUnderlyingIOSError(message) {
  try {
    const tmp3 = getUnderlyingIOSExceptionRecursively(message) ?? null;
    return tmp3;
  } catch (err) {
    return null;
  }
}
export function serializeError(arg0) {
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
  const obj = _mod15190;
  return stringify(obj.normalizeToSize(error1));
}
