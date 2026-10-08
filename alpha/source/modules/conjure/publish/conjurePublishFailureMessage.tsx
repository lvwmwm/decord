// Module ID: 16916
// Function ID: 16917
// Name: conjurePublishFailureMessage
// Dependencies: [1126, 3827, 2]
// Exports: default

// Module 16916 (conjurePublishFailureMessage)
import intl3 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
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
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3827["7ZsIF1"], obj);
    }
    return formatToPlainStringResult;
  }
  const intl = intl3.intl;
  formatToPlainStringResult = intl.string(_modDef3827.gMWZeG);
};
