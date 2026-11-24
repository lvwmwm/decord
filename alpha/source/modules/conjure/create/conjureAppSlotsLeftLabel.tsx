// Module ID: 18702
// Function ID: 18703
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1112, 4192, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 18702 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4192.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4192.Wy5aK4, obj);
  }
  return stringResult;
}
