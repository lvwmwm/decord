// Module ID: 17051
// Function ID: 17052
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1126, 3849, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 17051 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3849.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3849.Wy5aK4, obj);
  }
  return stringResult;
};
