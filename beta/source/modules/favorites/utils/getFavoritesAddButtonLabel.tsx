// Module ID: 15160
// Function ID: 15161
// Name: getFavoritesAddButtonLabel
// Dependencies: [1113, 3679, 2]
// Exports: getFavoritesAddButtonLabel

// Module 15160 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1113 */;
import _modDef3679 from "module_3679" /* 3679 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3679.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3679.xKXcSu);
  }
  return formatToPlainStringResult;
}
