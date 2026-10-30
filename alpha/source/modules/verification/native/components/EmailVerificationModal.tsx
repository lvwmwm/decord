// Module ID: 6990
// Function ID: 6991
// Name: EmailVerificationModal
// Dependencies: [32, 19, 1384, 6991, 1072, 21, 6989, 1261, 6992, 7050, 7058, 7064, 7070, 7073, 7144, 7157, 7162, 504, 5607, 7163, 1114, 2]
// Exports: default

// Module 6990 (EmailVerificationModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6989 */;
import ChangeEmailStore from "ChangeEmailStore" /* 6991 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
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
