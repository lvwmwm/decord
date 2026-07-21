// Module ID: 9221
// Function ID: 72108
// Name: _saveEmail
// Dependencies: []
// Exports: finishChangeEmailFlow, finishVerifyEmailFlow, saveEmail

// Module 9221 (_saveEmail)
function _saveEmail() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveEmail = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
({ setChangeEmailError: closure_4, ChangeEmailFields: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/verification/native/ChangeEmailUtils.tsx");

export const saveEmail = function saveEmail(arg0, arg1, arg2) {
  return _saveEmail(...arguments);
};
export const finishChangeEmailFlow = function finishChangeEmailFlow(closure_2, closure_4) {
  const replaced = closure_2.replace(closure_4(dependencyMap[4]).VerificationModalScenes.CHANGE_EMAIL_COMPLETE, { email: closure_4 });
};
export const finishVerifyEmailFlow = function finishVerifyEmailFlow(closure_2, closure_7) {
  const tmp = closure_7(closure_7(dependencyMap[4]).VerificationModalScenes.RESEND_EMAIL);
  if (-1 !== tmp) {
    closure_2.pop(closure_2.getState().routes.length - tmp);
  } else {
    const replaced = closure_2.replace(closure_7(dependencyMap[4]).VerificationModalScenes.RESEND_EMAIL);
  }
};
