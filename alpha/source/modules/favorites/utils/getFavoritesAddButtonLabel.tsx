// Module ID: 14353
// Function ID: 14354
// Name: getFavoritesAddButtonLabel
// Dependencies: [1114, 3447, 2]
// Exports: getFavoritesAddButtonLabel

// Module 14353 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3447.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3447.xKXcSu);
  }
  return formatToPlainStringResult;
}
