// Module ID: 18814
// Function ID: 18815
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1112, 4244, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 18814 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4244.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4244.Wy5aK4, obj);
  }
  return stringResult;
}
