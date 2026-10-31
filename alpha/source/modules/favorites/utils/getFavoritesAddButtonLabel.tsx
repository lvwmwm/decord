// Module ID: 14391
// Function ID: 14392
// Name: getFavoritesAddButtonLabel
// Dependencies: [1113, 3450, 2]
// Exports: getFavoritesAddButtonLabel

// Module 14391 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1113 */;
import _modDef3450 from "module_3450" /* 3450 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3450.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3450.xKXcSu);
  }
  return formatToPlainStringResult;
}
