// Module ID: 12383
// Function ID: 12384
// Dependencies: [19, 12384, 21, 12380, 12385, 1233, 2]

// Module 12383
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12380 */;
import ChatWarningIcon from "ChatWarningIcon" /* 12385 */;
import { QUARANTINE_APPEAL_LINK } from "QUARANTINE_APPEAL_LINK" /* 12384 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function ChatInputGuardQuarantineDM() {
  let obj = { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.EouHwv);
  const intl2 = getSystemLocale.intl;
  obj = { appealLink: QUARANTINE_APPEAL_LINK };
  obj[3] = intl2.format(getSystemLocale.t.PThBel, obj);
  return jsx(ChatInputGuardDefault, { appealLink: QUARANTINE_APPEAL_LINK });
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;
