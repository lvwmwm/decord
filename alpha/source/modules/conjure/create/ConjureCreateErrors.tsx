// Module ID: 6937
// Function ID: 6938
// Name: ConjureCreateErrors
// Dependencies: [1071, 1112, 4190, 2]
// Exports: classifyCreateFailure, createFailureStatus, getConjureCreateErrorMessage

// Module 6937 (ConjureCreateErrors)
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
class ConjureCreateError extends Error {
  constructor(reason, failureStatus) {
    const tmp2 = new tmp("conjure create failed: " + reason + " [" + failureStatus + "]", " [", failureStatus, "]");
    tmp2.name = "ConjureCreateError";
    tmp2.reason = reason;
    tmp2.status = failureStatus;
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/conjure/create/ConjureCreateErrors.tsx");

export { ConjureCreateError };
export function classifyCreateFailure(error) {
  let body;
  let status;
  if (typeof error === "object") {
    if (null !== error) {
      ({ status, body } = error);
      if (typeof status !== "number") {
        return "unknown";
      } else if (429 === status) {
        return "rate_limited";
      } else {
        let code;
        if (body != null) {
          code = body.code;
        }
        let str2 = "unknown";
        if (409 === status) {
          str2 = "unknown";
          if (code === AbortCodes.TOO_MANY_CONJURE_PROJECTS) {
            str2 = "project_limit";
          }
        }
        return str2;
      }
    }
  }
  return "unknown";
}
export function createFailureStatus(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  let num = 0;
  if (typeof status === "number") {
    num = status;
  }
  return num;
}
export function getConjureCreateErrorMessage(reason) {
  let str = "unknown";
  if (reason instanceof ConjureCreateError) {
    str = reason.reason;
  }
  if ("project_limit" === str) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef4190["lh+h/p"]);
  } else if ("rate_limited" === str) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef4190.zBENJU);
  } else {
    const intl = intl4.intl;
    return intl.string(_modDef4190["9m86fn"]);
  }
}
