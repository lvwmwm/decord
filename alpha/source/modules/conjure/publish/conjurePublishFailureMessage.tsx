// Module ID: 12320
// Function ID: 12321
// Name: conjurePublishFailureMessage
// Dependencies: [1112, 4190, 2]
// Exports: default

// Module 12320 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
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
      stringResult = intl2.string(_modDef4190.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef4190.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
