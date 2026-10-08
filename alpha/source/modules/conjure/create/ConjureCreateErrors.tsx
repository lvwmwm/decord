// Module ID: 12377
// Function ID: 12378
// Name: ConjureCreateErrors
// Dependencies: [1085, 1126, 3827, 2]
// Exports: classifyCreateFailure, createFailureStatus, getConjureCreateErrorMessage

// Module 12377 (ConjureCreateErrors)
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
class ConjureCreateError extends Error {
  constructor(reason, failureStatus) {
    const tmp2 = new tmp("vibegrations create failed: " + reason + " [" + failureStatus + "]", " [", failureStatus, "]");
    tmp2.name = "VibegrationsCreateError";
    tmp2.reason = reason;
    tmp2.status = failureStatus;
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/conjure/create/ConjureCreateErrors.tsx");

export { ConjureCreateError };
export const classifyCreateFailure = function classifyCreateFailure(value) {
  let body;
  let status;
  if (typeof value === "object") {
    if (null !== value) {
      ({ status, body } = value);
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
          if (code === AbortCodes.TOO_MANY_VIBEGRATIONS_PROJECTS) {
            str2 = "project_limit";
          }
        }
        return str2;
      }
    }
  }
  return "unknown";
};
export const createFailureStatus = function createFailureStatus(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  let num = 0;
  if (typeof status === "number") {
    num = status;
  }
  return num;
};
export const getConjureCreateErrorMessage = function getConjureCreateErrorMessage(reason) {
  let str = "unknown";
  if (reason instanceof ConjureCreateError) {
    str = reason.reason;
  }
  if ("project_limit" === str) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef3827["lh+h/p"]);
  } else if ("rate_limited" === str) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef3827.zBENJU);
  } else {
    const intl = intl4.intl;
    return intl.string(_modDef3827["9m86fn"]);
  }
};
