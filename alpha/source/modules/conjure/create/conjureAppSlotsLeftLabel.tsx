// Module ID: 13194
// Function ID: 13195
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1113, 4024, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 13194 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4024.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4024.Wy5aK4, obj);
  }
  return stringResult;
}
