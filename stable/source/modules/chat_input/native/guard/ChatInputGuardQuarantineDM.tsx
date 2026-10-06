// Module ID: 11838
// Function ID: 11839
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 11839, 21, 558, 576, 11835, 11840, 1127, 2]

// Module 11838 (ChatInputGuardQuarantineDM)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1127 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 11835 */;
import QuarantineConstants from "QuarantineConstants" /* 11839 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const QUARANTINE_APPEAL_LINK = QuarantineConstants.QUARANTINE_APPEAL_LINK;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    ChatInputGuardDefault;
    const intl = tmp(1127).intl;
    const intl2 = tmp(1127).intl;
    const obj3 = { appealLink: QUARANTINE_APPEAL_LINK };
    const tmp9 = <tmp7 type="simple-action" icon={null} message={intl.string(intl3.t.EouHwv)} subtext={intl2.format(intl3.t.PThBel, obj3)} />;
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  ChatInputGuardDefault;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  const obj2 = { appealLink: QUARANTINE_APPEAL_LINK };
  return <tmp type="simple-action" icon={null} message={intl.string(intl3.t.EouHwv)} subtext={intl2.format(intl3.t.PThBel, obj2)} />;
}));
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;
