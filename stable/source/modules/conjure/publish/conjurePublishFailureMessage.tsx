// Module ID: 17115
// Function ID: 17116
// Name: conjurePublishFailureMessage
// Dependencies: [1126, 3849, 2]
// Exports: default

// Module 17115 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(code) {
  let stringResult;
  if (20088 === code.code) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3849.UXEDPw);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef3849.gMWZeG);
  }
  return stringResult;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
