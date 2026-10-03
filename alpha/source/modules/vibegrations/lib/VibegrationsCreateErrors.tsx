// Module ID: 12697
// Function ID: 12698
// Name: VibegrationsCreateErrors
// Dependencies: [1085, 1126, 3723, 2]
// Exports: classifyCreateFailure, createFailureStatus, getVibegrationsCreateErrorMessage

// Module 12697 (VibegrationsCreateErrors)
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
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
    return intl3.string(_modDef3723.Asusmn);
  } else if ("rate_limited" === str) {
    const intl2 = intl4.intl;
    return intl2.string(_modDef3723.DT6qly);
  } else {
    const intl = intl4.intl;
    return intl.string(_modDef3723.KKkp5Y);
  }
};
