// Module ID: 8562
// Function ID: 8563
// Name: closeModal
// Dependencies: [32, 19, 1922, 8563, 676, 21, 8561, 503, 6314, 8564, 8567, 8568, 8570, 8573, 8618, 8623, 8625, 589, 7127, 6312, 1236, 2]
// Exports: default

// Module 8562 (closeModal)
import _slicedToArray from "_slicedToArray";
import NavigationStack from "NavigationStack";
import mergeGuildAvatar from "mergeGuildAvatar";
import { resetChangeEmailStore } from "ChangeEmailFields";
import { VerificationModalScenes } from "ME";
import { jsx } from "set";

const require = arg1;
function closeModal() {
  resetChangeEmailStore();
  importDefault(8561).close();
}
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default function EmailVerificationModal(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  let importDefault;
  let first;
  let callback;
  let obj = isChangeEmail(first[17]);
  const items = [mergeGuildAvatar];
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
