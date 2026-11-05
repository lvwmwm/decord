// Module ID: 13229
// Function ID: 13230
// Name: conjureAppSlotsLeftLabel
// Dependencies: [1113, 3995, 2]
// Exports: conjureAppSlotsLeftLabel

// Module 13229 (conjureAppSlotsLeftLabel)
import intl3 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/create/conjureAppSlotsLeftLabel.tsx");

export function conjureAppSlotsLeftLabel(count) {
  let stringResult;
  if (0 === count) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3995.s28pGG);
  } else {
    const intl = intl3.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(_modDef3995.Wy5aK4, obj);
  }
  return stringResult;
}
