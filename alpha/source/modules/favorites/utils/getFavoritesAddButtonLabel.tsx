// Module ID: 15185
// Function ID: 15186
// Name: getFavoritesAddButtonLabel
// Dependencies: [1113, 3681, 2]
// Exports: getFavoritesAddButtonLabel

// Module 15185 (getFavoritesAddButtonLabel)
import intl3 from "intl" /* 1113 */;
import _modDef3681 from "module_3681" /* 3681 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3681.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3681.xKXcSu);
  }
  return formatToPlainStringResult;
}
