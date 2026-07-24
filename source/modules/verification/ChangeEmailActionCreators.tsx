// Module ID: 9227
// Function ID: 72187
// Name: _confirmEmailChange
// Dependencies: [5, 653, 4942, 480, 2]
// Exports: confirmEmailChange, sendConfirmationCode

// Module 9227 (_confirmEmailChange)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _confirmEmailChange() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("makeRequest").fileFinishedImporting("modules/verification/ChangeEmailActionCreators.tsx");

export const sendConfirmationCode = function sendConfirmationCode() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = importDefault(4942);
  obj = { url: Endpoints.USER_EMAIL };
  obj = { event: require(480) /* isThrottled */.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE, properties: obj1 };
  obj1 = { is_resend: flag };
  obj.trackedActionData = obj;
  obj.rejectWithError = false;
  return obj.put(obj);
};
export const confirmEmailChange = function confirmEmailChange(arg0) {
  return _confirmEmailChange(...arguments);
};
