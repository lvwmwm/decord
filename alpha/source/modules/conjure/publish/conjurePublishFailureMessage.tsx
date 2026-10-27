// Module ID: 11768
// Function ID: 11769
// Name: conjurePublishFailureMessage
// Dependencies: [1125, 3831, 2]
// Exports: default

// Module 11768 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(detail) {
  let trimmed;
  if (detail.detail != null) {
    trimmed = str.trim();
  }
  if (null == trimmed) {
    let stringResult;
    if (20088 === detail.code) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(_modDef3831.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef3831.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
