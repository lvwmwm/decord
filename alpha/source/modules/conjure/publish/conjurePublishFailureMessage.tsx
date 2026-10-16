// Module ID: 11616
// Function ID: 11617
// Name: conjurePublishFailureMessage
// Dependencies: [1128, 3865, 2]
// Exports: default

// Module 11616 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(code) {
  let stringResult;
  if (20088 === code.code) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3865.UXEDPw);
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(_modDef3865.gMWZeG);
  }
  return stringResult;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
