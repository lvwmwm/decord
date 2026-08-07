// Module ID: 8392
// Function ID: 8393
// Name: closeModal
// Dependencies: [32, 19, 1903, 8393, 676, 21, 8391, 503, 5269, 8394, 8397, 8398, 8400, 8403, 8448, 8453, 8455, 589, 5656, 5723, 1236, 2]
// Exports: default

// Module 8392 (closeModal)
import _slicedToArray from "_slicedToArray";
import NavigationStack from "NavigationStack";
import mergeGuildAvatar from "mergeGuildAvatar";
import { resetChangeEmailStore } from "ChangeEmailFields";
import { VerificationModalScenes } from "ME";
import { jsx } from "set";

const require = arg1;
function closeModal() {
  resetChangeEmailStore();
  importDefault(8391).close();
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
