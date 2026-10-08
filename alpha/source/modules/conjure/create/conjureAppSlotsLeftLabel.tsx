// Module ID: 16859
// Function ID: 16860
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1126, 3827, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 16859 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3827.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3827.Wy5aK4, obj);
  }
  return stringResult;
};
