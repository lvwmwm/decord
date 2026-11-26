// Module ID: 13342
// Function ID: 13343
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 13343, 21, 13339, 13344, 1112, 2]

// Module 13342 (ChatInputGuardQuarantineDM)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1112 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13339 */;
import QuarantineConstants from "QuarantineConstants" /* 13343 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const QUARANTINE_APPEAL_LINK = QuarantineConstants.QUARANTINE_APPEAL_LINK;
const jsx = Fragment.jsx;
const memoResult = react.memo(function ChatInputGuardQuarantineDM() {
  ChatInputGuardDefault;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  const obj2 = { appealLink: QUARANTINE_APPEAL_LINK };
  return <tmp type="simple-action" icon={null} message={intl.string(intl3.t.EouHwv)} subtext={intl2.format(intl3.t.PThBel, obj2)} />;
});
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;
