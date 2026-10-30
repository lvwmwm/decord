// Module ID: 12401
// Function ID: 12402
// Name: conjurePublishFailureMessage
// Dependencies: [1114, 3865, 2]
// Exports: default

// Module 12401 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
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
      stringResult = intl2.string(_modDef3865.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef3865.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
