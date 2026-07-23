// Module ID: 9229
// Function ID: 72162
// Name: _saveEmail
// Dependencies: [5, 9183, 9230, 9232, 668, 2]
// Exports: finishChangeEmailFlow, finishVerifyEmailFlow, saveEmail

// Module 9229 (_saveEmail)
import set from "set";
import setChangeEmailError from "setChangeEmailError";

let closure_4;
let closure_5;
const require = arg1;
function _saveEmail() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ setChangeEmailError: closure_4, ChangeEmailFields: closure_5 } = setChangeEmailError);
const result = require("saveProfileAndAccountRequest").fileFinishedImporting("modules/verification/native/ChangeEmailUtils.tsx");

export const saveEmail = function saveEmail(arg0, arg1, arg2) {
  return _saveEmail(...arguments);
};
export const finishChangeEmailFlow = function finishChangeEmailFlow(outer1_2, outer1_4) {
  const replaced = outer1_2.replace(require(668) /* keys */.VerificationModalScenes.CHANGE_EMAIL_COMPLETE, { email: outer1_4 });
};
export const finishVerifyEmailFlow = function finishVerifyEmailFlow(outer1_2, outer1_7) {
  const tmp = outer1_7(require(668) /* keys */.VerificationModalScenes.RESEND_EMAIL);
  if (-1 !== tmp) {
    outer1_2.pop(outer1_2.getState().routes.length - tmp);
  } else {
    const replaced = outer1_2.replace(require(668) /* keys */.VerificationModalScenes.RESEND_EMAIL);
  }
};
