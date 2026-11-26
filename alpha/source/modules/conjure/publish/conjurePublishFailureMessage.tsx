// Module ID: 11476
// Function ID: 11477
// Name: conjurePublishFailureMessage
// Dependencies: [1112, 4245, 2]
// Exports: default

// Module 11476 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
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
      stringResult = intl2.string(_modDef4245.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef4245.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
