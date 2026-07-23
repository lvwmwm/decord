// Module ID: 9182
// Function ID: 71912
// Name: closeModal
// Dependencies: [57, 31, 1849, 9183, 653, 33, 9181, 480, 5087, 9184, 9187, 9188, 9190, 9193, 9228, 9233, 9235, 566, 5450, 5519, 1212, 2]
// Exports: default

// Module 9182 (closeModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { resetChangeEmailStore } from "setChangeEmailError";
import { VerificationModalScenes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function closeModal() {
  resetChangeEmailStore();
  importDefault(9181).close();
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default function EmailVerificationModal(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  let importDefault;
  let first;
  let callback;
  let obj = isChangeEmail(first[17]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  let verified;
  if (null != stateFromStores) {
    verified = stateFromStores.verified;
  }
  const tmp2Result = importDefault(first[18])(null != verified && verified);
  importDefault = tmp2Result;
  const tmp6 = callback(React.useState(), 2);
  first = tmp6[0];
  callback = tmp6[1];
  const items1 = [first, isChangeEmail, tmp2Result];
  if (!isChangeEmail) {
    let email;
    if (null != stateFromStores) {
      email = stateFromStores.email;
    }
    if (null != email) {
      obj = { screens: tmp8, initialRouteName: VerificationModalScenes.RESEND_EMAIL };
      const intl = isChangeEmail(first[20]).intl;
      obj.headerBackTitle = intl.string(isChangeEmail(first[20]).t["13/7kX"]);
      return jsx(isChangeEmail(first[19]).Navigator, { screens: tmp8, initialRouteName: VerificationModalScenes.RESEND_EMAIL });
    }
  }
  if (null == stateFromStores) {
    const ENTER_EMAIL = VerificationModalScenes.ENTER_EMAIL;
  }
  const CONFIRM_EMAIL_CHANGE_START = VerificationModalScenes.CONFIRM_EMAIL_CHANGE_START;
};
