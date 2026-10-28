// Module ID: 12592
// Function ID: 12593
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1125, 3863, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 12592 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export const conjureAppSlotsLeftLabel = function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3863.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3863.Wy5aK4, obj);
  }
  return stringResult;
};
