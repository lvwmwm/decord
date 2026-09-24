// Module ID: 12636
// Function ID: 12637
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 12637, 21, 558, 568, 12633, 12638, 1119, 2]

// Module 12636 (ChatInputGuardQuarantineDM)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12633 */;
import ChatWarningIcon from "ChatWarningIcon" /* 12638 */;
import noop from "module_19" /* 19 */;

require = fn;
const QUARANTINE_APPEAL_LINK = fn(12637).QUARANTINE_APPEAL_LINK;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { type: "simple-action", icon: jsx(tmp(12638).ChatWarningIcon, {}), message: null, subtext: null };
    const intl = tmp(1119).intl;
    obj2.message = intl.string(tmp(1119).t.EouHwv);
    const intl2 = tmp(1119).intl;
    const obj3 = { appealLink: QUARANTINE_APPEAL_LINK };
    obj2.subtext = intl2.format(tmp(1119).t.PThBel, obj3);
    const tmp9 = jsx(ChatInputGuardDefault, { type: "simple-action", icon: jsx(tmp(12638).ChatWarningIcon, {}), message: null, subtext: null });
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.EouHwv);
  const intl2 = util.intl;
  obj.subtext = intl2.format(util.t.PThBel, { appealLink: QUARANTINE_APPEAL_LINK });
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null });
}));
