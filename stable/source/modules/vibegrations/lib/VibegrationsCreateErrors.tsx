// Module ID: 12449
// Function ID: 12450
// Name: VibegrationsCreateErrors
// Dependencies: [1086, 1127, 3718, 2]
// Exports: classifyCreateFailure, createFailureStatus, getVibegrationsCreateErrorMessage

// Module 12449 (VibegrationsCreateErrors)
import Constants from "Constants" /* 1086 */;
import intl4 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
class VibegrationsCreateError extends Error {
  constructor(reason, failureStatus) {
    const tmp2 = new tmp("vibegrations create failed: " + reason + " [" + failureStatus + "]", " [", failureStatus, "]");
    tmp2.name = "VibegrationsCreateError";
    tmp2.reason = reason;
    tmp2.status = failureStatus;
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsCreateErrors.tsx");

export { VibegrationsCreateError };
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
export const getVibegrationsCreateErrorMessage = function getVibegrationsCreateErrorMessage(reason) {
  let str = "unknown";
  if (reason instanceof VibegrationsCreateError) {
    str = reason.reason;
  }
  if ("project_limit" === str) {
    const intl3 = intl4.intl;
    return intl3.string(_modDef3718.Asusmn);
  } else if ("rate_limited" === str) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef3718.DT6qly);
  } else {
    const intl = intl4.intl;
    return intl.string(_modDef3718.KKkp5Y);
  }
};
