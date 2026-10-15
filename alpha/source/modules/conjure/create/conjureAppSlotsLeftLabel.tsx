// Module ID: 11531
// Function ID: 11532
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1126, 3862, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 11531 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3862.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3862.Wy5aK4, obj);
  }
  return stringResult;
};
