// Module ID: 8112
// Function ID: 8113
// Name: ManualReviewPendingAlertModal
// Dependencies: [19, 21, 4750, 1236, 2887, 4750, 2]
// Exports: default

// Module 8112 (ManualReviewPendingAlertModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2887 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4750 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/age_assurance/native/ManualReviewPendingAlertModal.tsx");

export default function ManualReviewPendingAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.CNm4w6);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxyDefault["14Fje3"]);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t["NX+WJN"]);
  obj[0] = jsx(getAlertModalItemKey.AlertActionButton, { text: null }, "got-it");
  obj[2] = jsx(getAlertModalItemKey.AlertActions, { text: null });
  return jsx(getAlertModalItemKey.AlertModal, { text: null });
};
