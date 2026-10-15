// Module ID: 11593
// Function ID: 11594
// Name: conjurePublishFailureMessage
// Dependencies: [1126, 3862, 2]
// Exports: default

// Module 11593 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(code) {
  let stringResult;
  if (20088 === code.code) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3862.UXEDPw);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef3862.gMWZeG);
  }
  return stringResult;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
