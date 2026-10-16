// Module ID: 11554
// Function ID: 11555
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1128, 3865, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 11554 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3865.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3865.Wy5aK4, obj);
  }
  return stringResult;
};
