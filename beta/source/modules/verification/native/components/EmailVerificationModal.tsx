// Module ID: 5934
// Function ID: 5935
// Name: EmailVerificationModal
// Dependencies: [32, 19, 1372, 5935, 1074, 21, 5933, 1249, 5936, 5995, 6003, 6006, 6018, 6021, 6403, 6414, 6420, 504, 5910, 6421, 1115, 2]
// Exports: default

// Module 5934 (EmailVerificationModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5933 */;
import ChangeEmailStore from "ChangeEmailStore" /* 5935 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

function closeModal() {
  resetChangeEmailStore();
  const obj = EmailVerificationModalActionCreatorsDefault;
  obj.close();
}
let _slicedToArray = _slicedToArray_mod;
const resetChangeEmailStore = ChangeEmailStore.resetChangeEmailStore;
const VerificationModalScenes = Constants.VerificationModalScenes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default function EmailVerificationModal(isChangeEmail) {
  let closure_3;
  let currentUser;
  let first;
  isChangeEmail = isChangeEmail.isChangeEmail;
  importDefault = undefined;
  first = undefined;
  _slicedToArray = undefined;
  let tmp = isChangeEmail;
  let obj = isChangeEmail(first[17]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  const tmp4 = require("react");
  if (stateFromStores != null) {
    flag = stateFromStores.verified;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = tmp4(flag);
  importDefault = tmp4Result;
  [first, _slicedToArray] = react.useState();
  const items1 = [first, isChangeEmail, tmp4Result];
  if (!isChangeEmail) {
    let RESEND_EMAIL;
    let email;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    if (null != email) {
      RESEND_EMAIL = VerificationModalScenes.RESEND_EMAIL;
    }
    const Navigator = tmp(tmp2[19]).Navigator;
    const intl = tmp(tmp2[20]).intl;
    return <Navigator screens={tmp8} initialRouteName={RESEND_EMAIL} headerBackTitle={intl.string(tmp(first[20]).t["13/7kX"])} />;
  }
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  RESEND_EMAIL = verified ? tmp12.CONFIRM_EMAIL_CHANGE_START : tmp12.ENTER_EMAIL;
};
