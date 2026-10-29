// Module ID: 12809
// Function ID: 12810
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1125, 3864, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 12809 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3864.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3864.Wy5aK4, obj);
  }
  return stringResult;
}
