// Module ID: 12186
// Function ID: 12187
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 12187, 21, 558, 576, 12183, 12188, 1126, 2]

// Module 12186 (ChatInputGuardQuarantineDM)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12183 */;
import QuarantineConstants from "QuarantineConstants" /* 12187 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const QUARANTINE_APPEAL_LINK = QuarantineConstants.QUARANTINE_APPEAL_LINK;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardQuarantineDM() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    ChatInputGuardDefault;
    const intl = tmp(1126).intl;
    const intl2 = tmp(1126).intl;
    const obj3 = { appealLink: QUARANTINE_APPEAL_LINK };
    const tmp9 = <tmp7 type="simple-action" icon={null} message={intl.string(intl3.t.EouHwv)} subtext={intl2.format(intl3.t.PThBel, obj3)} />;
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ChatInputGuardQuarantineDM() {
  ChatInputGuardDefault;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  const obj2 = { appealLink: QUARANTINE_APPEAL_LINK };
  return <tmp type="simple-action" icon={null} message={intl.string(intl3.t.EouHwv)} subtext={intl2.format(intl3.t.PThBel, obj2)} />;
}));
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;
