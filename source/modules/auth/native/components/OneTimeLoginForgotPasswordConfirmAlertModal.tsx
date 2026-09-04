// Module ID: 6887
// Function ID: 6888
// Name: OneTimeLoginForgotPasswordConfirmAlertModal
// Dependencies: [19, 21, 4871, 1233, 4871, 2]
// Exports: default

// Module 6887 (OneTimeLoginForgotPasswordConfirmAlertModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4871 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/auth/native/components/OneTimeLoginForgotPasswordConfirmAlertModal.tsx");

export default function OneTimeLoginForgotPasswordConfirmAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["6Ecyts"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.iAcrqV);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.BddRzS);
  obj[0] = jsx(getAlertModalItemKey.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(getAlertModalItemKey.AlertActions, { text: null });
  return jsx(getAlertModalItemKey.AlertModal, { text: null });
};
