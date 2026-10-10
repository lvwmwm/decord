// Module ID: 17112
// Function ID: 17113
// Name: conjurePublishFailureMessage
// Dependencies: [1126, 3849, 2]
// Exports: default

// Module 17112 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishFailureMessage.tsx");

export default function conjurePublishFailureMessage(detail) {
  let trimmed;
  if (detail.detail != null) {
    trimmed = str.trim();
  }
  if (null != trimmed) {
    let formatToPlainStringResult;
    if ("" !== trimmed) {
      const intl2 = intl3.intl;
      const obj = { reason: trimmed };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3849["7ZsIF1"], obj);
    }
    return formatToPlainStringResult;
  }
  const intl = intl3.intl;
  formatToPlainStringResult = intl.string(_modDef3849.gMWZeG);
};
