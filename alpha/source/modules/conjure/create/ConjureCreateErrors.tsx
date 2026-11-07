// Module ID: 11000
// Function ID: 11001
// Name: ConjureCreateErrors
// Dependencies: [1072, 1113, 4026, 2]
// Exports: classifyCreateFailure, createFailureStatus, getConjureCreateErrorMessage

// Module 11000 (ConjureCreateErrors)
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
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
    return intl3.string(_modDef4026["lh+h/p"]);
  } else if ("rate_limited" === str) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef4026.zBENJU);
  } else {
    const intl = intl4.intl;
    return intl.string(_modDef4026["9m86fn"]);
  }
}
