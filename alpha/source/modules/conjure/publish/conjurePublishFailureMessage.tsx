// Module ID: 11330
// Function ID: 11331
// Name: conjurePublishFailureMessage
// Dependencies: [1112, 4192, 2]
// Exports: default

// Module 11330 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
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
      stringResult = intl2.string(_modDef4192.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef4192.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
