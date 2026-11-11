// Module ID: 13074
// Function ID: 13075
// Name: conjurePublishFailureMessage
// Dependencies: [1113, 4079, 2]
// Exports: default

// Module 13074 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
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
      stringResult = intl2.string(_modDef4079.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef4079.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
