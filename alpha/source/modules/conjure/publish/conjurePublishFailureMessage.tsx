// Module ID: 11804
// Function ID: 11805
// Name: conjurePublishFailureMessage
// Dependencies: [1125, 3863, 2]
// Exports: default

// Module 11804 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
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
      stringResult = intl2.string(_modDef3863.UXEDPw);
    } else {
      const intl = intl3.intl;
      stringResult = intl.string(_modDef3863.gMWZeG);
    }
    trimmed = stringResult;
  }
  return trimmed;
};
export const PREVIEW_BOT_NOT_INSTALLED_CODE = 20088;
