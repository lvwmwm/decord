// Module ID: 12270
// Function ID: 12271
// Name: conjurePublishFailureMessage
// Dependencies: [1113, 4028, 2]
// Exports: default

// Module 12270 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
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
      stringResult = intl2.string(_modDef4028.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef4028.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
