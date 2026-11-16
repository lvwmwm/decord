// Module ID: 13163
// Function ID: 13164
// Name: conjurePublishFailureMessage
// Dependencies: [1113, 4131, 2]
// Exports: default

// Module 13163 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
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
      stringResult = intl2.string(_modDef4131.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef4131.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
