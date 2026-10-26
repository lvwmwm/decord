// Module ID: 11787
// Function ID: 11788
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1128, 3830, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 11787 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3830.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3830.Wy5aK4, obj);
  }
  return stringResult;
};
