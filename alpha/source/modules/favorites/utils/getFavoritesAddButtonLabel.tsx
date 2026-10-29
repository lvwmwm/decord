// Module ID: 14323
// Function ID: 14324
// Name: getFavoritesAddButtonLabel
// Dependencies: [1125, 3446, 2]
// Exports: getFavoritesAddButtonLabel

// Module 14323 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1125 */;
import _modDef3446 from "module_3446" /* 3446 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3446.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3446.xKXcSu);
  }
  return formatToPlainStringResult;
}
