// Module ID: 5577
// Function ID: 5578
// Name: closeModal
// Dependencies: [32, 19, 1921, 5578, 673, 21, 5576, 500, 5579, 5638, 5646, 6532, 6541, 6544, 6922, 6933, 6939, 586, 5553, 6940, 1233, 2]
// Exports: default

// Module 5577 (closeModal)
import _modDef5576 from "module_5576" /* 5576 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;
import { resetChangeEmailStore } from "ChangeEmailFields" /* 5578 */;
import { VerificationModalScenes } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function closeModal() {
  resetChangeEmailStore();
  _modDef5576.close();
}
const result = require("set").fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default function EmailVerificationModal(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  importDefault = undefined;
  let first;
  let callback;
  let obj = isChangeEmail(first[17]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.verified;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = importDefault(first[18])(flag);
  importDefault = tmp4Result;
  const tmp6 = callback(React.useState(), 2);
  first = tmp6[0];
  callback = tmp6[1];
  const items1 = [first, isChangeEmail, tmp4Result];
  if (!isChangeEmail) {
    let email;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    if (null != email) {
      obj = { screens: null, initialRouteName: null, headerBackTitle: null };
      obj[0] = tmp8;
      obj[1] = VerificationModalScenes.RESEND_EMAIL;
      const intl = tmp(tmp2[20]).intl;
      obj[2] = intl.string(tmp(tmp2[20]).t["13/7kX"]);
      return jsx(tmp(tmp2[19]).Navigator, { screens: null, initialRouteName: null, headerBackTitle: null });
    }
  }
  if (stateFromStores != null) {
    const verified = stateFromStores.verified;
  }
};
