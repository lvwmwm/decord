// Module ID: 11514
// Function ID: 89681
// Dependencies: [31, 11515, 33, 11511, 11516, 1212, 2]

// Module 11514
import { QUARANTINE_APPEAL_LINK } from "QUARANTINE_APPEAL_LINK";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function ChatInputGuardQuarantineDM() {
  let obj = { type: "simple-action", icon: jsx(require(11516) /* ChatWarningIcon */.ChatWarningIcon, {}) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.message = intl.string(require(1212) /* getSystemLocale */.t.EouHwv);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { appealLink: QUARANTINE_APPEAL_LINK };
  obj.subtext = intl2.format(require(1212) /* getSystemLocale */.t.PThBel, obj);
  return jsx(importDefault(11511), { appealLink: QUARANTINE_APPEAL_LINK });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default memoResult;
