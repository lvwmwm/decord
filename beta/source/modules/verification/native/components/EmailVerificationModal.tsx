// Module ID: 5839
// Function ID: 5840
// Name: EmailVerificationModal
// Dependencies: [32, 19, 1372, 5840, 1074, 21, 5838, 1249, 5841, 5900, 5908, 6832, 6842, 6845, 7227, 7238, 7244, 504, 5815, 7245, 1115, 2]
// Exports: default

// Module 5839 (EmailVerificationModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5838 */;
import NavigatorHeader from "NavigatorHeader" /* 5841 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function closeModal() {
  resetChangeEmailStore();
  EmailVerificationModalActionCreatorsDefault.close();
}
const resetChangeEmailStore = fn(5840).resetChangeEmailStore;
const VerificationModalScenes = fn(1074).VerificationModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default function EmailVerificationModal(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  importDefault = undefined;
  first = undefined;
  _slicedToArray = undefined;
  const items = [UserStore];
  const stateFromStores = isChangeEmail(first[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  let obj = isChangeEmail(first[17]);
  if (stateFromStores != null) {
    flag = stateFromStores.verified;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = require("useInitialValue")(flag);
  importDefault = tmp4Result;
  [first, _slicedToArray] = noop.useState();
  const items1 = [first, isChangeEmail, tmp4Result];
  if (!isChangeEmail) {
    let email;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    if (null != email) {
      let obj2 = { screens: tmp8, initialRouteName: VerificationModalScenes.RESEND_EMAIL, headerBackTitle: null };
      const intl = tmp(tmp2[20]).intl;
      obj2.headerBackTitle = intl.string(tmp(tmp2[20]).t["13/7kX"]);
      return jsx(tmp(tmp2[19]).Navigator, { screens: tmp8, initialRouteName: VerificationModalScenes.RESEND_EMAIL, headerBackTitle: null });
    }
  }
  if (stateFromStores != null) {
    const verified = stateFromStores.verified;
  }
};
