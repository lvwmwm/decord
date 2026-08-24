// Module ID: 6588
// Function ID: 6589
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [19, 21, 4667, 1236, 2854, 4667, 2]
// Exports: default

// Module 6588 (AgeVerificationQuestUnsupportedAlertModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2854 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4667 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.gUqXQN);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxyDefault.yBHwMy);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t["NX+WJN"]);
  obj[0] = jsx(getAlertModalItemKey.AlertActionButton, { text: null }, "got-it");
  obj[2] = jsx(getAlertModalItemKey.AlertActions, { text: null });
  return jsx(getAlertModalItemKey.AlertModal, { text: null });
};
