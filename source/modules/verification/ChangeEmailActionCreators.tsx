// Module ID: 9183
// Function ID: 71924
// Name: _confirmEmailChange
// Dependencies: []
// Exports: confirmEmailChange, sendConfirmationCode

// Module 9183 (_confirmEmailChange)
function _confirmEmailChange() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _confirmEmailChange = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/verification/ChangeEmailActionCreators.tsx");

export const sendConfirmationCode = function sendConfirmationCode() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = importDefault(dependencyMap[2]);
  obj = { url: Endpoints.USER_EMAIL };
  obj = { event: arg1(dependencyMap[3]).NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE, properties: obj1 };
  const obj1 = { is_resend: flag };
  obj.trackedActionData = obj;
  obj.rejectWithError = false;
  return obj.put(obj);
};
export const confirmEmailChange = function confirmEmailChange(arg0) {
  return _confirmEmailChange(...arguments);
};
