// Module ID: 13249
// Function ID: 13250
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1113, 4026, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 13249 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4026.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4026.Wy5aK4, obj);
  }
  return stringResult;
}
