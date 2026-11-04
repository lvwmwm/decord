// Module ID: 11910
// Function ID: 11911
// Name: conjurePublishFailureMessage
// Dependencies: [1128, 3862, 2]
// Exports: default

// Module 11910 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1128 */;
import _modDef3862 from "module_3862" /* 3862 */;
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
      stringResult = intl2.string(_modDef3862.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef3862.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
