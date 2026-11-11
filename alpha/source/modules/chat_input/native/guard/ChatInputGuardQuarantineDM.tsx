// Module ID: 14771
// Function ID: 14772
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 14772, 21, 14768, 14773, 1113, 2]

// Module 14771 (ChatInputGuardQuarantineDM)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 14768 */;
import QuarantineConstants from "QuarantineConstants" /* 14772 */;
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
