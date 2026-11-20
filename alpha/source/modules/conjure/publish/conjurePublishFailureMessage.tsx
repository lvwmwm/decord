// Module ID: 12191
// Function ID: 12192
// Name: conjurePublishFailureMessage
// Dependencies: [1112, 4091, 2]
// Exports: default

// Module 12191 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
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
      stringResult = intl2.string(_modDef4091.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef4091.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
