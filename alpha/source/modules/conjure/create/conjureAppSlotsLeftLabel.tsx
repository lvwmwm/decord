// Module ID: 13895
// Function ID: 13896
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1113, 4079, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 13895 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4079.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef4079.Wy5aK4, obj);
  }
  return stringResult;
}
