// Module ID: 9154
// Function ID: 71758
// Name: closeModal
// Dependencies: [57, 31, 1850, 9155, 653, 33, 9153, 480, 5121, 9156, 9159, 9160, 9162, 9165, 9200, 9205, 9207, 566, 5485, 5552, 1212, 2]
// Exports: default

// Module 9154 (closeModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { resetChangeEmailStore } from "setChangeEmailError";
import { VerificationModalScenes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function closeModal() {
  resetChangeEmailStore();
  importDefault(9153).close();
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
