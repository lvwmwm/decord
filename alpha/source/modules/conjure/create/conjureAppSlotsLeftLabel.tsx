// Module ID: 18708
// Function ID: 18709
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1113, 4089, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 18708 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4089.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4089.Wy5aK4, obj);
  }
  return stringResult;
}
