// Module ID: 15017
// Function ID: 15018
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1113, 4133, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 15017 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4133.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4133.Wy5aK4, obj);
  }
  return stringResult;
}
