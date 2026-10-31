// Module ID: 12995
// Function ID: 12996
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1113, 3868, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 12995 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3868.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3868.Wy5aK4, obj);
  }
  return stringResult;
}
