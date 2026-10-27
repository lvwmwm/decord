// Module ID: 12545
// Function ID: 12546
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1125, 3831, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 12545 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3831.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3831.Wy5aK4, obj);
  }
  return stringResult;
};
