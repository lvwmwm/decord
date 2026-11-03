// Module ID: 14537
// Function ID: 14538
// Name: getFavoritesAddButtonLabel
// Dependencies: [1113, 3577, 2]
// Exports: getFavoritesAddButtonLabel

// Module 14537 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3577.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3577.xKXcSu);
  }
  return formatToPlainStringResult;
}
