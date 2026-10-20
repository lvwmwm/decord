// Module ID: 11647
// Function ID: 11648
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1128, 3820, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 11647 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3820.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3820.Wy5aK4, obj);
  }
  return stringResult;
};
