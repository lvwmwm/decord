// Module ID: 12183
// Function ID: 12184
// Name: UserProfileAlertUserReported
// Dependencies: [19, 21, 4750, 1236, 4750, 2]
// Exports: default

// Module 12183 (UserProfileAlertUserReported)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4750 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUserReported.tsx");

export default function UserProfileAlertUserReported() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.IwHU3R);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.qxyRaq);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.BddRzS);
  obj[0] = jsx(getAlertModalItemKey.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(getAlertModalItemKey.AlertActions, { text: null });
  return jsx(getAlertModalItemKey.AlertModal, { text: null });
};
