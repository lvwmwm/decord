// Module ID: 11675
// Function ID: 11676
// Name: conjurePublishFailureMessage
// Dependencies: [1128, 3883, 2]
// Exports: default

// Module 11675 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(code) {
  let stringResult;
  if (20088 === code.code) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3883.UXEDPw);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef3883.gMWZeG);
  }
  return stringResult;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
