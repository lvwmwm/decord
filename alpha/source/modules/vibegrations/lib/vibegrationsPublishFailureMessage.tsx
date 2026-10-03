// Module ID: 16610
// Function ID: 16611
// Name: vibegrationsPublishFailureMessage
// Dependencies: [1126, 3723, 2]
// Exports: default

// Module 16610 (vibegrationsPublishFailureMessage)
import intl3 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPublishFailureMessage.tsx");

export default function vibegrationsPublishFailureMessage(detail) {
  let trimmed;
  if (detail.detail != null) {
    trimmed = str.trim();
  }
  if (null != trimmed) {
    let formatToPlainStringResult;
    if ("" !== trimmed) {
      const intl2 = intl3.intl;
      const obj = { reason: trimmed };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.xTlB8O, obj);
    }
    return formatToPlainStringResult;
  }
  const intl = intl3.intl;
  formatToPlainStringResult = intl.string(_modDef3723.fNP6Cd);
};
