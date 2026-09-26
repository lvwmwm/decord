// Module ID: 12734
// Function ID: 12735
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 12735, 21, 12731, 12736, 1115, 2]

// Module 12734 (ChatInputGuardQuarantineDM)
import util from "util" /* 1115 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12731 */;
import ChatWarningIcon from "ChatWarningIcon" /* 12736 */;
import noop from "module_19" /* 19 */;

require = fn;
const QUARANTINE_APPEAL_LINK = fn(12735).QUARANTINE_APPEAL_LINK;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default noop.memo(function ChatInputGuardQuarantineDM() {
  const obj = { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.EouHwv);
  const intl2 = util.intl;
  obj.subtext = intl2.format(util.t.PThBel, { appealLink: QUARANTINE_APPEAL_LINK });
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null });
});
